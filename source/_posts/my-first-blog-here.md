---
layout: post
title: My First Blog Here
date: '2014-03-11 22:52:09 -0400'
comments: true
tags:
  - General
  - Octopress
  - Blog
abbrlink: 90d363bc
categories: Website
---

Well, this is my first blog here (right now on github).

I'm using the [Octopress](http://octopress.org) as blog content management,
and I will briefly describe the way to set it up.

<!-- more -->

First, go to Octopress [setup page](http://octopress.org/docs/setup/).
Follow the instruction,
install the dependencies that Octopress will need.

Then choose the platform that the blog will be hosted on,
here is a link for [deploying github pages](http://octopress.org/docs/deploying/github/).
**Note**: an error occured while I followed the instruction to rake it.

``` bash
rake aborted!
You have already activated rake 10.1.0, but your Gemfile requires rake 0.9.6.
Prepending `bundle exec` to your command may solve this.
/Users/Haochen/myBlog/octopress/Rakefile:2:in `<top (required)>'
(See full trace by running task with --trace)
```

This error could be easily solved by adding `bundle exec` in front of the `rake` command.

After `rake generate`, go to '_deploy' folder, and type `git pull origin master`.
Then type `rake deploy`.
Otherwise, there will be some errors:

``` bash
error: failed to push some refs to 'git@gihub.com:your github page repo'
```

Now, your blog page is on-line.
Although the pages are hosted on github,
you still need version control on your Octopress settings,
so don't forget to commit to the 'source' branch.

``` bash
git add .
git commit -m 'your message'
git push origin source
```

I'd rather put them into a bash file git_commit_source.sh, rather than typing every time

``` bash
!/bin/bash
git add . &&
git commit -m "$1" && #first argument will be the commit message
git push origin source
```

To generate a blog page, you could use ` rake new_post['blog name'] `.
However, as I mentioned before the `rake` command wouldn't work properly if the ruby version didn't match.
We could use ` bundle exec rake ` to run the command.
Moreover, if you are using **zsh shell**, you should also add ` noglob ` in front of these command, because symbol '[' and ']' are reserved in zsh for regular expression.

Finally, my blog is here.
Much easier than I expected.
Using Octopress can save your time on setting a blog site, and it generates pages automatically.

This blog is still underconstruction. I would like to make it more simple and pretty.
K.I.S.S

**Update** (several minutes later):
Encountered a problem of creating single page, e.g. 404.html.
The command `rake new-page['404']` cannot work on zsh due to '[]' is converted.
Hence, the only way to add cutomize page is to write a markdown file and put into 'source' fold.
But, do not forget to add the following to the head of page:

``` markdown
---
layout: page
title: "Super Awesome"
date: 2011-07-03 5:59
comments: true
sharing: true
footer: true
---
```

**Update** (2014-Mar-12):
`rake preview` has problem with Safari.
Don't know why but only show blank page while open [http://localhost:4000](http://localhost:4000) .
Using Chrome or Firefox will solve this.[[ref](https://github.com/imathis/octopress/issues/1395)]

Due to save typing, I have written some bash files (deploy.sh and preview.sh):

``` bash
#!/bin/bash

bundle exec rake generate &&
bundle exec rake deploy

```

``` bash
#!/bin/bash

# set up the octopress preview
# open http://localhost:4000 in Chrome
# Safari has some wired error in it

# if previous preview is running, stop it
preview_pid=`/bin/ps -fu $USER| grep "rake\ preview" | grep -v "grep" | awk '{print $2}'`
kill -2 $preview_pid

bundle exec rake generate &&
bundle exec rake preview &

sleep 5 # wait a while to make sure the preview already running

#change the browser command if you are using a different OS and browser
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome 'http://localhost:4000'

pidof "Google Chrome" | xargs wait
preview_pid=`/bin/ps -fu $USER| grep "rake\ preview" | grep -v "grep" | awk '{print $2}'`
kill -2 $preview_pid
#echo "$preview_pid"
echo "Preview DONE!"

```

Please ignore the text below, the latest code fixes all of them. :P

~~**Warnning**:
This preview shell script may not work for you if you are a ruby developer,
or you are using some programs written or depended in/on ruby or ruby packages,
because it killed all ruby processes at the end.
Do not forget to fully quit Chrome (Comman+q in MacOS) before starting a new preview,
otherwise unknown error would occur (duplicate processes).~~

~~BTW, the preview.sh also left a messy terminal for you.
Well, everything have side effects.
But you could add `clear` command at the end of the script,
if you don't really care about the traces.~~
