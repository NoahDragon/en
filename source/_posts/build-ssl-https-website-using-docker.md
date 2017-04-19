---
title: Build SSL HTTPS Website Using Docker
comments: true
tags:
  - SSL
  - Nginx
  - HTTPS
categories:
  - Docker
abbrlink: '75027340'
date: 2016-11-18 22:35:10
---

![https](\img\https.png)

When you’re visiting my website, you may not see the https in the URL, which means you have been directed to a CDN node other than my VPS server. This doesn’t mean the method doesn’t work. Anyway, let’s begin the talk.

The purpose of this post is to help people to avoid the pitfalls that I encountered, and severs as a note for future reference.

<!-- more -->

### Prerequisites

* All my setup is on Ubuntu 16.04, and may not suitable for other version/OS.

* [Docker](https://docs.docker.com/engine/installation/) must be installed and properly functioning.

* [Docker compose](https://docs.docker.com/compose/install/) is an option, but this article only showing the method that is using docker compose, which is simpler than using docker alone.

* Any machine/VPS/cloud server that you have root control, like [Digital Ocean](https://m.do.co/c/eaf9c533bc55)[Get $10 with coupon code `ACTIVATE10`], [Vultr](http://www.vultr.com/?ref=7025798)[Get $50 (expired after 6 months) with coupon code `DOMORE` ], [Lindo](https://www.linode.com/?r=31b7ad9bbcdac84ed780e48344212c99afcaa3d2)[Get $20 with coupon code `PodcastInIt20`], and etc.

* DNS already points to your machine, and all domains which would like to support Https also have CNAME or A record.

* Git is also an option, unless you would like to build the image on your own.

### Set Up

Only two docker images are used:
* [Docker-letsencrypt-manager](https://github.com/bringnow/docker-letsencrypt-manager)
* [Docker-nginx-letsencrypt](https://github.com/bringnow/docker-nginx-letsencrypt)

The niginx server has to start up before running the letsencrypt, because the letsencrypt needs to access the server to finish the generating certificate process.

#### docker-compose.yml for nignx

Create `docker-compose.yml` and paste the following into it.

```yml
nginx:
  image: bringnow/nginx-letsencrypt
  volumes:
    - ./nginx.conf:/etc/nginx/nginx.conf
    - /etc/letsencrypt:/etc/letsencrypt
    - /var/acme-webroot:/var/acme-webroot
    - /srv/docker/nginx/dhparam:/etc/nginx/dhparam
  ports:
    - "80:80"
    - "443:443"
  net: "host"
  dns_search:
    - "example.com"
```

Modify it accordingly to fit your environment.

#### Generate dhparam

Although the nginx docker will create DH parameters on initial start up, it is time comsuming to generate the 4096 bit DH parameters (more than an hour on my VPS). Run the following command and copy the generated file to the `/srv/docker/nginx/dhparam` folder (set in docker-compose.yml).

```bash
openssl dhparam -out RSA4096.pem -5 4096
```

#### Create Nginx Config file

In order to complete the letsencrypt challenge, the server has to open the 80 port. The nginx-letsencrypt image already come with the setting snippets: `snippets/letsencryptauth.conf` and `snippets/sslconfig.conf`.

Here is the sample config file:

```nginx
events {
  worker_connections 1024;
}

http {

  include snippets/letsencryptauth.conf;
  include snippets/sslconfig.conf;

  server {
    listen 443 ssl default_server;
    server_name example.com www.example.com

    ssl_certificate /etc/letsencrypt/live/www.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/www.example.com/privkey.pem;

    add_header Strict-Transport-Security "max-age=31536000; includeSubdomains" always;

    location / {
      # Just return a blank response
      return 200;
    }
  }
}
```

**NOTE**: Please comment out those two lines start up ssl_certificate before the certificate generated.

#### Make Nginx Online

Now run the following command to bring Nginx online:

```bash
docker-compose up -d
```

To confim if the docker is running correctly, we could look the log file to check:

```bash
docker-compose logs
```

If there are some error messages, please check the Nginx config file and restart the docker.

#### docker-compose.yml for letsencrypt

In another folder, create a docker-compose.yml:

```yml
cli:
  image: bringnow/letsencrypt-manager:latest
  env_file: config.env
  volumes:
    - /etc/letsencrypt:/etc/letsencrypt
    - /var/lib/letsencrypt:/var/lib/letsencrypt
    - /var/acme-webroot:/var/acme-webroot

cron:
  image: bringnow/letsencrypt-manager:latest
  env_file: config.env
  volumes:
    - /etc/letsencrypt:/etc/letsencrypt
    - /var/lib/letsencrypt:/var/lib/letsencrypt
    - /var/acme-webroot:/var/acme-webroot
  command: cron-auto-renewal
  restart: always
```

Modify it accordingly. Make sure the folder `/var/lib/letsencrypt` and `/var/acme-webroot` have created and exist.

Then create config.env file in the same folder and input your email:

```
LE_EMAIL=
LE_RSA_KEY_SIZE=4096
```

#### Generate SSL Certificate

Finally, we could create our Https certificate. Run the commands:

``` bash
docker-compose run cli add <domain> [alternative domains]
```

If it fails, please check if Nginx is runing and the DNS setting is correct.

**NOTE**: If the certificate generate, don’t forget to remove comment on ssl_certificate lines in Nginx config file, and restart it.

### Conclusion

Now your website should up and running with https. Enjoy.

~ EOF ~
