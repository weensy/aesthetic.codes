---
title: How does CSS work in font without italic?
date: "2019-11-05"
tags: [css,italic,font-family]
---

<style>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,400i|Roboto&display=swap');
</style>


This page is importing these fonts.
* <span style="font-family: 'Roboto';">Roboto</span>
* <span style="font-family: 'Playfair Display';">Playfair Display</span>
* <span style="font-family: 'Playfair Display'; font-style: italic;">Playfair Display Italic

### Think
> When the first font I specify doesn't have italic, will the first font be italicized or will the second font with italic be displayed?

### Code
```html
<span style="font-family: 'Roboto', 'Playfair Display'; font-style: italic;">
This is Roboto first, Playfair Display second. And style is italic.</span>
```
### Execute
<span style="font-family: 'Roboto', 'Playfair Display'; font-style: italic;">This is Roboto first, Playfair Display second. And style is italic.</span>

## Conclusion
Force italics when that doesn't have italics, without displaying the next font.