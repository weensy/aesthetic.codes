---
title: Let's start Ruby on Rails
date: "2020-06-29"
tags: [hello, ruby, rails]
---

## Install

Rails is Web Application Framework written in Ruby. So I need to install Ruby first.
I already have a homebrew and will use it.

```shell
brew update
brew install rbenv && brew upgrade ruby-build
```

rbenv is a Ruby version management tool.

```shell
rbenv install 2.7.1
rbenv rehash
ruby --version
```

Install Ruby. I have installed the current stable version 2.7.1.
And check the ruby version.
If you don't get the correct version, run the following command to add rbenv to bash.

```shell
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile
```

Next, install Bundler. Bundler is a Gem dependency management tool.
Gem is a package on Ruby.

```shell
gem install bundler
```

Finally, install Rails.

```shell
gem install rails --no-document
```

Done.
Now I can start my project with Rails.
