---
layout: post
title: P2P Lending on GCE
comments: true
date: 2022-04-02 22:15:34
tags:
  - GCP
  - Google Cloud
  - GCE
  - P2P
  - Block Chain
  - Computer Engine
categories: Cloud
showAd: true
---

Recently, one of my friend reaching out to me regarding how to install the [P2P-Lending](https://github.com/adorsys/p2p-lending) on a GCE instance.
Well, the repo is old and haven't updated for more than 3 years.
So I have overcome many difficulties to manage run it in a GCE instance.
Here are the steps:

1. Create GCE instances with allow HTTP traffic (using defaul Debian image if using other Linux distros the following preparation may not fit).
2. Install NodeJs, followed steps in: https://cloud.google.com/nodejs/docs/setup
```
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
  nvm install --lts
  nvm use --lts
```
3. Install npm/git/python2 via command (for build-in python3 please ensure it >= 3.6 or upgrade to the latest): 
```
   sudo apt install git build-essential python
   npm install -g npm
```
4. To avoid permission denied issue when calling the npm installed global package, please follow this link to resolve it:
```
    mkdir ~/.npm-global
    npm config set prefix '~/.npm-global'
    export PATH=~/.npm-global/bin:$PATH
    source ~/.profile
```
5. Install Ganache via command: `npm install ganache -g`
6. Install Truffle via command: `npm install truffle -g`
7. Clone the repo: `git clone https://github.com/adorsys/p2p-lending.git`
8. Start Ganache with port 8545: `ganache -p 8545 &`
9. Go to p2p-lending folder, and delete the packge-lock.json file (force to pull the latest packages):
```
  cd p2p-lending
  rm package-lock.json
  npm install
  truffle compile
  npm run migrate:dev
```
10. [Optional] Set python executable, require python2 if not installed: `npm config set /usr/bin/python`
11. In frontend folder, modify package.json, change the package web version from "1.0.0-beta.37" to "^1.0.0". Then follow commands to install:
```
  cd frontend
  npm uninstall node-sass
  npm i -D sass
  rm -rf node_modules package-lock.json && npm install
```
12. Start the serve: `npm start`

That's it. Hope it could provide some insights when you try to use the P2P-Lending, but strongly not recommended.
Since I'm not familar with blockchain, so not sure if there is any alternative to the P2P-Lending.
If anyone knows, please share in the comments. I will let my friend know.
Thanks in advance.
