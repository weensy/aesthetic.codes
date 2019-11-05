---
title: How does CSS work in font without italic?
date: "2019-11-05"
tags: [css,italic,font-family]
---
<head>
<style>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,400i|Roboto&display=swap');
</style>
</head>

```css
<span style="font-family: 'Roboto';">This is Roboto</span>
```
<span style="font-family: 'Roboto';">This is Roboto</span>
<div style="font-family: 'Playfair Display'">This is Playfair Display</div>
<div style="font-family: 'Roboto'; font-style: italic;">This is Roboto, italic</div>
<div style="font-family: 'Playfair Display'; font-style: italic;">This is Playfair Display, italic</div>
<div style="font-family: 'Roboto', 'Playfair Display'; font-style: italic;">This is Roboto first, Playfair Display second. And style is italic.</div>
