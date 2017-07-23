---
title: Auto Sync Github Forked Repos
comments: true
categories:
  - CI
abbrlink: 562ef8f1
date: 2017-07-22 22:32:53
tags:
  - travis-ci
  - Github
  - nodejs
---

As a Github heavy user, when I saw an interested repos, I would fork them to my "secret" organization to read/use in future. However, when checked them later, most of the time (99%), the repos have already out of synced. There are three options I normally choose:
1. delete the forked repo and re-fork;
2. manually merge to the latest commit;
3. use the PR and switch the source and destination ([ref](https://stackoverflow.com/a/23853061)).

<!--more-->

Although those three options works like a "charm" in a small amount of repos, it's more like chores when maintaining hundreds forked repos.

### TL;DR

Then I came up the idea to use Travis-CI to sync those repos automatically. The mechanism is simple and straightforward, which runs a script periodically to update forked repos with source repos. The script could be bash, javascript, python, or any language which could call git command in the Linux OS.

### My Approach

Based on the above idea, I wrote a [js script](https://github.com/NoahDragon/update-forked-repo) to do the job. But this script is only a solution my problems:

* Only works on forked repos in a Github Org.
* Forked repos should never be modified. 
* User Github personal token to access.
* Not support private repos.

If your needs also match the aboves, then simple fork my script, and modify the `org` in `.config.yml`.