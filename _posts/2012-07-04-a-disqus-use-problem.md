---
layout: post
title: "一个DISQUS的使用问题"
---

初次使用DISQUS。

有评论的页面中还是显示“0 Comments 和 0 Reactions”，郁闷了很久。

今天终于找到了原因，将下面这一行：
    var disqus_url = "http://hzmook.github.com/{{page.url}}";
修改为：
    var disqus_url = "http://hzmook.github.com{{page.url}}";
，即后者比前者少一个“/”，即可。


