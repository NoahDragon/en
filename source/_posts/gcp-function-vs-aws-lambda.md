---
layout: post
title: Cloud Functions VS Lambda
comments: true
date: 2020-08-05 22:15:34
tags:
  - GCP
  - Google Cloud
  - Cloud Function
  - AWS
  - Lambda
  - API Gateway
categories: Cloud
showAd: true
---

Many articles are talking about the differences between GCP and AWS.
Is that true one is superior to another?
Or they are just apples and oranges?
For me, I never treat them seriously, as my daily job is heavily on GCP.
However, recently I got a project which needs to integrate these two cloud providers' services.
Now the headache is coming.

![Cloud Function vs Lambda](https://miro.medium.com/max/1033/1*AaYOwm0dahyNhZ0K-5il8Q.png)

This comparison is based on a developer perspective, who is fresh to AWS and expert (self-claimed) in GCP.

## Development Speed

Both can start coding without documents when using the first time.
I feel this is a great advantage to move product to cloud, saving tons of development time.

However, I feel Cloud Function is simpler, agile, and more intuitive compared to Lambda based on the following:
1. Lambda needs to set API gateway in order to trigger it by URL
2. Lambda does not support install Python packages, to do so, you have to upload your code with packages in a zip or build a customized runtime environment.
3. Lambda HTTP trigger passes in the request within a wrapper, not raw request with body and header info. So need to understand its parameter structures.
4. Lambda has to enable the [binary support](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-payload-encodings-configure-with-console.html) for certain content types.
5. Lambda built-in editor does not support uploaded zip with too many files.

So the winner is obvious, Cloud Function is the better choice if you don't want to deal with package installation or HTTP trigger settings.

## Deploy Speed

This one I have to say that AWS has impressed me.
Every time if I clicked the save, the code has already deployed, although this comes with a drawback that less customizability.
I enjoy this fast and non-interrupted deployment process.
Almost every service could be instantly provisioned, modified, and deleted.
(So far our codebase is relatively small like ~500 lines of code for each service)

So what does the GCP lack?
1. Most services under GCP need several minutes to provision.
2. Cloud Functions take a couple of minutes to deploy a new version, even just change a line of comment.
3. Searching for other services feels slower than AWS.

All in all, GCP feels slower in many aspects, so AWS has a smoother user experience.

## Debugging

Lambda auto wins this track, due to an on-going [log issue](https://issuetracker.google.com/issues/155215191) in Cloud Functions, which causes no logging when function crashes.
Besides the issue, both provide detailed trace logs.
Moreover, Lambda provides a configurable test event to run the function on the fly, which really neat.

## Docs

This won't affect the user experience for experts, but definitely a plus for newcomers.
Maybe just because I'm newbie to AWS, I always find it difficult to read the official documents.
1. There is no programming language switcher in the code section, you always need to find a dedicated page for a specific programming language.
2. Most operations have to use CLI, which creates a barrier for people like me who just would like to try and do not want to mess up our dev machine.
3. No Cloud Shell. A similar reason to the previous one. Although this is not a doc, it is nice to try the tutorials in a setup environment, so less weird errors due to package versioning.

Actually, cloud techniques are pretty alike among providers.
Although the under table infrastructures may differ, the user-level implementations do not vary too much.
With better doc would attract more people who are new to the cloud.
From this perspective, GCP did a very good job of providing tutorials and tools.

## Pricing

This influences the least to developers.
It is no good or bad, it is all depending on the traffic volume and the boss's preferences.

| Provider | Lambda | Cloud Functions |
|:--------:|:---:|:---:|
| Pricing | 1M/month requests and 400K GB-sec/month compute time for **free**, then $0.20/1M requests and $0.00001667/GB-sec | 2M/month requests and (400K GB-sec/month, 200K GHz-sec/month) compute time for **free**, then $0.40/1M invocations, plus $0.0000025/GB-sec and $0.00001/GHz-sec |

Cloud Functions have a more complex formula to calculate the compute time pricing.
Basically, it adds the CPU usage (GHz-sec) into the calculation.
So Lambda is cheaper if not using the provisioned concurrency, which charges [extra cost](https://aws.amazon.com/lambda/pricing/#Provisioned_Concurrency_Pricing).

Here comes the question, does Cloud Function have a similar provisioned concurrency feature?


## Integration

This is a general talk about how to integrate services on different cloud platforms, not specified to cloud functions or lambda.

Both products are integrated well with other cloud products within the same cloud provider.
Unless there is a unique cloud service, most development could be done within a single cloud provider.
If you feel the developers do not have enough work, distribute your services into two or three cloud providers.
They will spend most of their time on how to integrate those services, instead of actual development.

## Finally

This comparison is based on my personal experience.
Both have advantages and disadvantages, please choose based on your use cases.
But keep in mind, don't try to integrate them!
This is the only advice I learned from using both.
