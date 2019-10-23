---
title: "Logical operators in JavaScript"
date: "2019-10-23"
tags: [javascript,logical-operators,syntax]
---
<table>
  <thead>
    <tr>
      <th>Operator</th>
      <th>Syntax</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Logical AND</td>
      <td>```expr1 && expr2```</td>
      <td>If expr1 can be converted to true, returns expr2; else, returns expr1.</td>
    </tr>
    <tr>
      <td>Logical OR</td>
      <td>expr1 || expr2</td>
      <td>If expr1 can be converted to true, returns expr1; else, returns expr2.</td>
    </tr>
    <tr>
      <td>Logical NOT</td>
      <td>!expr</td>
      <td>Returns false if its single operand can be converted to true; otherwise, returns true.</td>
    </tr>
  </tbody>
</table>

##### Examples of expressions that can be converted to false are:
* null;
* NaN;
* 0;
* empty string ("" or '' or ``);
* undefined.

##### Operator precedence:
* && > ||