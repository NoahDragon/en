---
layout: post
title: How to print access token inside Cloud Function
comments: true
date: 2020-07-22 22:15:34
tags:
  - GCP
  - Google Cloud
  - Cloud Function
  - Token
  - Credential
  - Auth
categories: Cloud
showAd: true
---

**As Cloud Function supports many programming languages, this article will use Python for the demostration**

![Cloud Function Logo](https://miro.medium.com/proxy/1*MeXs5Ot8X49Fn1vE_13ukA.png)

If anyone has used the Google Cloud Function, they probably stuck at the limited system packages [1]. 
There is no `curl` or `wget`, and could not customize the runtime system.
Like the document stated, it is a fully managed environment.
Someone may jump out and yell the Cloud Run.
Yes, Cloud Run will be the successor of Cloud Function in many aspects.
However, it does not support trigger from Cloud Storage bucket.
Yes, yes, yes, you can use Pub/Sub in Cloud Run to implement the bucket trigger.
But why not keep it simple?

## Use cases

During the local environment testing, we normally use `gcloud auth application-default print-access-token` [2] to call the Google API endpoint.
It could be integrated into a `curl` command within a script:
```bash
curl -H "Content-Type: application/x-www-form-urlencoded" -d "access_token=$(gcloud auth application-default print-access-token)" https://www.googleapis.com/oauth2/v1/tokeninfo
```

Everything working fine on our local machine, it is time to move everything to the cloud.
We assume the Google Cloud will handle the credentials for us, because we are accessing resourses withing the GCP, and using the same service account.
Our assumption will be busted by the brutal reality.
We still need to explicitly create credentials when calling other GCP services.

This becomes a barrier when moving to the Cloud Function.
Initial thought would be using the Python subprocess to call `curl` command.
As stated above, the `curl` does not exist and could not be installed in Cloud Function system.
Luckily, the `curl` command can easily replaced by the Python request package.
But, how about the `gcloud`? It is also not included in the system packages. 
So here is the solution.

## Solutioins

We know there is a google-auth Python package [3] to handle GCP related authentications.
The `google.auth.default()` could return a credential object which has a token field.
Looks promising, isn't it?
How about getting the token from google-auth?
So I wrote the following code:
(The following code could be directly run in Cloud Function)

```python
import google.auth

def get_token(request):
  cred, project_id = google.auth.default()
  return f'{cred.__dict__}'
```

Well, the output shows nothing:

```
{'token': None, 'expiry': None, '_scopes': None, '_service_account_email': 'default'}
```

The google-auth package is not open source, so I could find the logic when the token field is populated.
Therefore, I came up an assumption that the token field would be populated during the usage.
I will use Document AI as an example, you could use other GCP services, I think the logic behind should be the same.
I rewrite the sample code [4] to fit the Cloud Function:

```python
import google.cloud.documentai as gcd
import google.auth

def get_token(request):
  cred, project_id = google.auth.default()
  gcd_client = gcd.DocumentUnderstandingServiceClient(credentials=cred)

  req = gcd.ProcessDocumentRequest(
      parent=f"projects/{project_id}",
      input_config={
              'gcs_source':{
                  'uri': 'gs://cloud-samples-data/documentai/form.pdf'}, 
              'mime_type':"application/pdf"}, 
      document_type="general", 
      form_extraction_params={'enabled': True})

  return f'{cred.__dict__}'
```

Still, the `token` is None.
Okay, seems it has not been updated at all.
I only used the document AI package intilization to avoid extra charge on invoking the actual process.
However, if we actual process the document by adding `response = gcd_client.process_document(request=req)` before the return statement.
The magic happens.

```python
import google.cloud.documentai as gcd
import google.auth

def get_token(request):
  cred, project_id = google.auth.default()
  gcd_client = gcd.DocumentUnderstandingServiceClient(credentials=cred)

  req = gcd.ProcessDocumentRequest(
      parent=f"projects/{project_id}",
      input_config={
              'gcs_source':{
                  'uri': 'gs://cloud-samples-data/documentai/form.pdf'}, 
              'mime_type':"application/pdf"}, 
      document_type="general", 
      form_extraction_params={'enabled': True})

  response = gcd_client.process_document(request=req)

  return f'{cred.__dict__}'
```

To avoid the security breach, I will not post the output here.
You will see the `token` field has the value we are seeking for.

Mission complete!?

## Ultimate solution

If there are Python SDKs for GCP services, why bother to get the access token?

<iframe src="https://giphy.com/embed/uHox9Jm5TyTPa" width="480" height="253" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

[1] https://cloud.google.com/functions/docs/reference/python-system-packages

[2] https://cloud.google.com/sdk/gcloud/reference/auth/application-default/print-access-token

[3] https://google-auth.readthedocs.io/en/latest/

[4] https://github.com/GoogleCloudPlatform/python-docs-samples/blob/master/document/cloud-client/parse_form_beta.py
