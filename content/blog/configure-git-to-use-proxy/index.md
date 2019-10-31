---
title: "Configure git to use proxy"
date: "2019-10-15"
tags: [git,proxy,vscode]
---

### How to check the proxy of your workshop
1. Windows Settings
2. Network & Internet
3. Proxy
4. Check Address and Port

#### If this is using a script
1. Access address of script
2. Analysis script file
3. Check your proxy address

### Configure git
```bash
git config --global http.proxy <your proxy address>
git config --global https.proxy <your proxy address>
```