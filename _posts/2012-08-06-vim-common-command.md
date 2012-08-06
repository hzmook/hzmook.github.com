---
layout: post
title: "VIM常用命令"
---

#### 插入模式
    i = insert mode at cursor
    I = insert at the beginning of line
    a = append after the cursor
    A = append at the end of the line
    o = open blank line below current line
    O = open blank line above current line
    Esc = exit insert mode

#### 光标移动
    h,j,k,l = ←, ↓, ↑, →
    ctrl+f = 下一页(forward)
    ctrl+b = 上一页(backward)
    w = 跳到下一个单词的开头
    W = 跳到下一个单词(空白分隔)的开头
    e = 跳到下一个单词的末尾
    E = 跳到下一个单词(空白分隔)的末尾
    b = 跳到前一个单词的开头
    B = 跳到前一个单词(空白分隔)的开头
    0 = 跳到本行行头
    $ = 跳到本行行尾
    ^ = 跳到本行第一个非空白字符
    g_ = 跳到本行最后一个非空白字符
    gg = 跳到第一行
    G = 跳到最后一行
    [N]G = 跳到第N行
    `. = 跳到最后编辑的地方
    * = 向下查找当前光标所在位置的字符串
    # = 向上查找当前光标所在位置的字符串

#### 编辑
    u = undo
    ctrl+r = redo
    ~ = switch case
    >> = indent line one column right
    << = indent line one column left
    == = auto-indent current line

#### 剪切与粘贴
    dd = 删除当前行，并把删除的行存到剪贴板里
    x = 删除当前字符
    X = 删除前一个字符
    dw = delete to end of word
    D = delete to end of line
    yy = 复制当前行
    [N]yy = 复制N行
    yw = copy to end of word
    y$ = copy to end of line
    p = 在光标位置之后粘贴
    P = 在光标位置之前粘贴

#### 查找
    /pattern = search for pattern
    ?pattern = search backwards for pattern
    n = repeat search in same direction
    N = repeat search in opposite direction

#### 退出
    :w = 保存
    :wq = 保存并退出
    :x = 保存并退出
    :q = 退出，有改动未保存时退出失败
    :q! = 强制退出

- - -
[VIM CheetSheet](/images/post/vim.png)
- - -