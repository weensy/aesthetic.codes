---
title: Let's start Ruby on Rails - 2
date: "2020-07-01"
tags: [hello, ruby, rails]
---

## Make new application

Create a new Rails application.

```shell
sudo rails new ror-store
```

I got a permission error, so I did it with sudo.

After execution, files are created in the ror-store directory as shown below.
![VSCode](./Screen Shot 2020-07-01 at 23.53.27.png)

Connect to a pre-made Git repository.

```shell
git remote add origin https://github.com/vaporwavy/ror-store.git
git add -A
git commit -m 'Add new rails application'
git push origin master
```
