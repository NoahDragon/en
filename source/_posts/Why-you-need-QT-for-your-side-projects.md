---
layout: post
title: Why you need QT for your side projects
comments: true
date: 2019-10-09 22:15:34
tags:
  - QT
  - GUI
  - Webassemble
  - Side Project
categories: Programming
showAd: true
---

I'm working on an side project which need a fancy GUI interface, so I was choosing between Webassemble and QT.
This article will briefly descibe how I made the decision.

<!--more-->

TL;DR: I choose QT as sibe project GUI creator for its strong community and webassemble support.

Before I start mubling, I would like to state my view on the GUI vs CLI.
I like to use CLI, as it is easy to integrate with pipe and automation process.
Also devloping CLI is focusing on functionality instead of aligning pixels.
Moreover, it feels geek and cool.
However, I also found the esiest understandable application usually have a good GUI.
A picture is worthing a thousand of words.
GUI is that picture in a program.
The best applications in my mind is that have both GUI and CLI.

Recently, I was looking for a GUI library which is open source and cross-platform.
The first thing comes to my mind is the web development, like React and Vue.
However, JS has bad reputation on performance, and my side project is based on video processing.
Then I googled a little bit, seems webassemble is the best solution to overcome the performance concerns.
But QT can also generate webassemble applications.

After trying both, I have conclude their pros and cons in the following:

### Webassemble
#### Pros
* New technology
* Supported by major browsers
* Faster
#### Cons
* Performance is generally 30% better than JS (not really impresive)([ref](https://medium.com/@torch2424/webassembly-is-fast-a-real-world-benchmark-of-webassembly-vs-es6-d85a23f8e193))
* Not mature, many features underdevlopment and can cause wired issues
* Only support C/C++

### QT
#### Pros
* Support Python (personal preference)
* Cross-platform build binary
* IDE support
#### Cons
* Need to pay attention to its license
* Current project directory could not be recognized correctly on Windows
* Many issues on QT creator

In summary, webassemble is still not mature for building a project.
If you still don't want to miss this trends, use QT instead.
As it can also generate webassemble application, meanwhile, doesn't need to worry about the low level implementation.
