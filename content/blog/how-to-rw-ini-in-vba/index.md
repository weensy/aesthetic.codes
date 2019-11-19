---
title: How to R/W .ini in VBA
date: "2019-11-19"
tags: [vba, ini, code]
---

## Code

```vb
Option Explicit

Public Declare Function WriteString& Lib "kernel32" Alias "WritePrivateProfileStringA" (ByVal AN$, ByVal KN$, ByVal iVal$, ByVal fPath$)
Public Declare Function GetString& Lib "kernel32" Alias "GetPrivateProfileStringA" (ByVal AN$, ByVal KN$, ByVal iVal$, ByVal RetS$, ByVal rSize&, ByVal fPath$)

' Ini Write
Public Sub WriteINI(iSt As String, iK As String, iVal As String, fPath As String)
    Call WriteString(iSt, iK, iVal, fPath)
End Sub

' Ini Read
Public Function ReadINI(iSt As String, iK As String, fPath As String) As String
    Dim sBuf As String
    Dim sSize As Long
    sBuf = Space$(255)
    sSize = GetString(iSt, iK, "", sBuf, 255, fPath)
    If sSize Then ReadINI = Left$(sBuf, sSize)
End Function
```

## Syntax & Parameter

#### WritePrivateProfileStringA

```cs
WritePrivateProfileStringA(lpAppName, lpKeyName, lpString, lpFileName);
```

- lpAppName: Name of section in Ini file(Create if it doesn't exist)
- lpKeyName: Name of key in Ini file(Create if it doesn't exist)
- lpString: Value for save
- lpFileName: Path of Ini file

#### GetPrivateProfileStringA

```cs
GetPrivateProfileStringA(lpAppName, lpKeyName, lpDefault, lpReturnedString, nSize, lpFileName);
```

- lpAppName: Name of section in Ini file
- lpKeyName: Name of key in Ini file
- lpDefault: If the lpKeyName key cannot be found in the initialization file, GetPrivateProfileString copies the default string to the lpReturnedString
- lpReturnedString: A variable that receives the retrieved string
- nSize: The size of returned string
- lpFileName: Path of Ini file
