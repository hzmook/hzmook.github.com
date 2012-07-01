---
layout: master
title: "JavaScript正则表达式"
---

JavaScript正则表达式
================

**NOTE:** 在正则表达式中，许多标点符号具有特殊的含义。它们是：
<pre><code>^ $ . * + ? = ! : | \ / ( ) [ ] { }</code></pre>
  
<br>
## 正则表达式的直接量字符

<table border="1" style="width:100%;">
	<tbody>
		<tr><th width="20%">字符</th><th>匹配</th></tr>
		<tr><td>字母数字字符</td><td>自身</td></tr>
		<tr><td>\0</td><td>NUL字符(\u0000)</td></tr>
		<tr><td>\t</td><td>制表符(\u0009)</td></tr>
		<tr><td>\n</td><td>换行符(\u000A)</td></tr>
		<tr><td>\v</td><td>垂直制表符(\u000B)</td></tr>
		<tr><td>\f</td><td>换页符(\u000C)</td></tr>
		<tr><td>\r</td><td>回车(\u000D)</td></tr>
		<tr><td>\xnn</td><td>由十六进制数nn指定的拉丁字符，例如，\x0A等价于\n</td></tr>
		<tr><td>\uxxxx</td><td>由十六进制xxxx指定的Unicode字符，例如，\u0009等价于\t</td></tr>
		<tr><td>\cX</td><td>控制字符^X。例如，\cJ等价于换行符\n</td></tr>
	</tbody>
</table>
  
<br>
## 正则表达式的字符类

<table border="1" style="width:100%;">
	<tbody>
		<tr><th width="20%">字符</th><th>匹配</th></tr>
		<tr><td>[...]</td><td>位于括号之内的任意字符</td></tr>
		<tr><td>[^...]</td><td>不在括号之中的任意字符</td></tr>
		<tr><td>.</td><td>除换行符和其他Unicode行终止符之外的任意字符</td></tr>
		<tr><td>\w</td><td>任意ASCII单字字符，等价于[a-zA-Z0-9_]</td></tr>
		<tr><td>\W</td><td>任意非ASCII单字字符，等价于[^a-zA-Z0-9_]</td></tr>
		<tr><td>\s</td><td>任何Unicode空白符</td></tr>
		<tr><td>\S</td><td>任何非Unicode空白符的字符，注意\w和\S不同</td></tr>
		<tr><td>\d</td><td>任意ASCII数字，等价于[0-9_]</td></tr>
		<tr><td>\D</td><td>除了ASCII数字之外的任何字符，等价于[^0-9_]</td></tr>
		<tr><td>[\b]</td><td>退格直接量(特例)</td></tr>
	</tbody>
</table>
  
<br>
## 正则表达式的重复字符

<table border="1" style="width:100%;">
	<tbody>
		<tr><th width="20%">字符</th><th>含义</th></tr>
		<tr><td>{n,m}</td><td>匹配前一项至少n次，但是不能超过m次</td></tr>
		<tr><td>{n,}</td><td>匹配前一项n次，或更多次</td></tr>
		<tr><td>{n}</td><td>匹配前一项恰好n次</td></tr>
		<tr><td>?</td><td>匹配前一项0次或1次，也就是说前一项是可选。等价于{0,1}</td></tr>
		<tr><td>+</td><td>匹配前一项1次或多次，等价于{1,}</td></tr>
		<tr><td>*</td><td>匹配前一项0次或多次，等价于{0,}</td></tr>
	</tbody>
</table>
  
<br>
## 正则表达式的选择、分组和引用字符

<table border="1" style="width:100%;">
	<tbody>
		<tr><th width="20%">字符</th><th>含义</th></tr>
		<tr><td>|</td><td>选择。匹配的是该符号左边的子表达式或右边的子表达式</td></tr>
		<tr><td>(...)</td><td>组合。将几个项目组合为一个单元，这个单元可由*、+、?和|等符号使用，而且还可以记住和这个组合匹配的字符以供此后的引用使用</td></tr>
		<tr><td>(?:...)</td><td>只组合。把项目组合到一个单元，但是不记忆与该组匹配的字符</td></tr>
		<tr><td>\n</td><td>和第n个分组第一次匹配的字符相匹配。组是括号中的子表达式(可能是嵌套的)。组号是从左到右计数的左括号数，以(?:形式分组的组不编码</td></tr>
	</tbody>
</table>
  
<br>
## 正则表达式的锚字符

<table border="1" style="width:100%;">
	<tbody>
		<tr><th width="20%">字符</th><th>含义</th></tr>
		<tr><td>^</td><td>匹配字符串的开头，在多行检索中，匹配一行的开头</td></tr>
		<tr><td>$</td><td>匹配字符串的结尾，在多行检索中，匹配一行的结尾</td></tr>
		<tr><td>\b</td><td>匹配一个词语的边界。简而言之，就是位于字符\w和\W之间的位置，或位于字符\w和字符串的开头或结尾之间的位置(但注意，[\b]匹配的是退格符)</td></tr>
		<tr><td>\B</td><td>匹配非词语边界的位置</td></tr>
		<tr><td>(?=p)</td><td>正前向声明，要求接下来的字符都与模式p匹配，但是不包括匹配中的那些字符</td></tr>
		<tr><td>(?!=p)</td><td>反前向声明，要求接下来的字符不与模式p匹配</td></tr>
	</tbody>
</table>
  
<br>
## 正则表达式的标志

<table border="1" style="width:100%;">
	<tbody>
		<tr><th width="20%">字符</th><th>含义</th></tr>
		<tr><td>i</td><td>执行不区分大小写的匹配</td></tr>
		<tr><td>g</td><td>执行一个全局匹配。简而言之，即找到所有匹配，而不是在找到第一个之后就停止</td></tr>
		<tr><td>m</td><td>多行模式，^匹配一行的开头或字符串的开头，$匹配一行的结尾或字符串的结尾</td></tr>
	</tbody>
</table>
  
