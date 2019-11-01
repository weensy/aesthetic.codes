---
title: Variable declaration with "{}" in JavaScript
date: "2019-10-29"
tags: [declaration,variable,javascript]
description: I saw a code I don't know like "const { props } = this". What is "{}" mean?
---
It is one of syntax in "destructuring assignment" in JavaScript ES6.

### For example
You can rewrite this.
```javascript
const title = post.title
const date = post.date
const tags = post.tags
```
As this.
```javascript
const { title, date, tags } = post
```

`test`
