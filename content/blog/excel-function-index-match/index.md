---
title: "Excel - Function Index-Match"
date: "2019-10-18T03:11:00.000Z"
tags: [excel,function,index-match]
---

You can use a combination of index and match instead of vlookup.  
And it is better than vlookup.

### Function Index
```
INDEX(array, row_num, [column_num])
```
* A range of cells or an array constant.
* Selects the row in array from which to return a value.
* Selects the column in array from which to return a value.

##### Retern
Returns the value of an element in a table or an array, selected by the row and column number indexes.

### Function Match
```
MATCH(lookup_value, lookup_array, [match_type])
```
* lookup\_value: The value that you want to match in lookup\_array.
* lookup\_array: The range of cells being searched.
* match\_type: -1, 0, or 1. The match_type argument specifies how Excel matches values. Default value is 1.

##### match_type
* 1: values in lookup\_array <= lookup\_value
* 0: values in lookup\_array = lookup\_value
* -1: values in lookup\_array >= lookup\_value

##### Retern
MATCH returns the position of the matched value within lookup\_array, not the value itself.  
If MATCH is unsuccessful in finding a match, it returns the \#N/A error value.

##### String search
* MATCH does not distinguish between uppercase and lowercase letters when matching text values.
* If match_type is 0 and lookup_value is a text string, you can use the wildcard characters — the question mark (?) and asterisk (\*) — in the lookup_value argument. A question mark matches any single character; an asterisk matches any sequence of characters. If you want to find an actual question mark or asterisk, type a tilde (~) before the character.
