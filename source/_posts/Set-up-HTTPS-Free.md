---
title: Set up HTTPS Free
showAd: true
comments: true
tags:
  - HTTPS
  - Cloudflare
  - Github
  - Website
categories: Server
abbrlink: daa790
date: 2016-09-22 21:52:47
---

![](\img\https_5.png)

Nowadays, it is easy to get an TLS certificate to create HTTPS website ([Ref](https://letsencrypt.org/)), but it requires the full control of server and configuration to maintain. However, for the casual user, like me this blog, I host my content on a third party server (Github Pages), which strictly forbids to customize server settings. To bypass those limits on server side, we need a middle layer to control all traffics, the Cloudflare is the best tool.

<!-- More -->

## Backgrounds

[Github](https://github.com/) provides a service called Github Pages, which allows user to create static content on Github server and access via username.github.io. However, it does not support https for custom domains, and the cache age is only 10 mins and can not be adjusted.

[Cloudflare](https://www.cloudflare.com/) is a DNS and CDN provider. All the basic services are free of charge, and they are already good enough for a static website.

[HTTPS](https://en.wikipedia.org/wiki/HTTPS) is a web portal, which also called HTTP over TLS. It provides secure connect between server and client. To enable this on your server, you have to purchase a certificate from a TLS provider (**not cheap**), and set up it for your domain (**not easy**). One important reason to use HTTPS other than security is speed, that firewalls would skip checking the contents send via HTTPS, hence HTTPS normally faster than HTTP in most scenarios (see [http vs https](https://www.httpvshttps.com/)).

[HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) helps your website more secure. It strictly forbids the HTTP connection on your website, if your website displays a content from a HTTP link, the browser will refuse to load. So before set your site up and run with HTTPS and eliminate mix contents, do not turn it on.

## Prerequisites

### Settings on Github

Set up an Github Pages, add CNAME to the root folder. Here is the [guide](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) for using custom domain with Github pages.

### Settings on Cloudflare

First, you have to set up the Cloudflare as your DNS manager. It basically tells the domain provider that DNS is handled by Cloudflare. You can google to find a tutorial about it.

Then, connect to Github page. Just setting the A and CNAME records on DNS.

### Test if Cloudflare is working

Type the following code in your console (replace theurloftheresource to the actual url)

``` bash
curl -svo /dev/null http://theurloftheresource
```

If the return shows something like CF-Cache-Status: HIT, that means your pages have cached on Cloudflare ([Ref](https://support.cloudflare.com/hc/en-us/articles/200169556-How-can-I-tell-if-CloudFlare-is-caching-my-site-or-a-specific-file-)).

## Set up HTTPS and Page Rules

To enable the HTTPS is simple, just need to turn on the Crypto. Here we choose flexible. The full and full(strict) will also connect server (github pages) via HTTPS, which is not possible.

![](/img/https_1.png)

To turn on the HSTS is as easy as the HTTPS, just click the icon. But you have to click accept to indicate that you acknowledge this setting may break your site if not be set properly. To avoid the risk, we'd better set up the page rules before turn it on.

There are three basic checks (at least) to turn on the HSTS:

- Always connected via HTTPS
- <http://domain.com> need to redirect to <https://domain.com>
- <http://domain.com> can't redirect to <https://www.domain.com>

To pass those checks, we only need two page rules (Cloudflare free plan can set maximum three page rules). The first it always using HTTPS, and the second is forwarding URL. Note, the order matters.

![](/img/https_2.png)

Now enable the HSTS, and then open the [Chrome preload list](https://hstspreload.appspot.com/), and submit your domain. It should succeed, and shows the following message.

![](/img/https_3.png)

Everything is set and your website will always be connected through the secure protocol.

## Extra Page Rule Usage

As we have one more page rule left, you could leave it as blank. But as stated above, the github pages set the Cache-Control: max-age=600, which is 10 mins. That means every 10 mins the user has to fetch data through github page, no matter it changed or not. This is really inefficiency. To overwrite this setting, we could set the browser cache TTL. I set it to one year, because my assets would rarely be modified.

![](/img/https_4.png)

Moreover, there is another setting that could power up the static website. It is the edge cache TTL, which set the time length that Cloudflare will hold your content caches. For example, if we set it to 2 hours, which means every 2 hours Cloudflare has to fetch data from origin server. Since our static websites do not change a lot, we could set to one month.

## Conclusion

The settings for Cloudflare is generic, that means you can use it to set up HTTPS on any kind of server free.

Cloudflare has plenty powerful services, if using them wisely, can save your life for managing a website.

Enjoy your secure and faster website!
