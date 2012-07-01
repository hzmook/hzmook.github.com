---
layout: post
styles: [syntax]
title: 使用Jekyll在Github上搭建博客
---

Jekyll是一个使用Ruby编写的静态站点生成工具，使用Liquid模板渲染引擎，支持Markdown和Textile标记语言，并且可以为所有以 .html、.markdown、.textile扩展名结尾的文件使用YAML配置，内置语法高亮功能。而Github的Pages服务可以为每个Github主机上的仓库提供静态页面服务，并且Pages服务支持Jekyll。因为Github Pages有两种Pages，分别是用户页面和项目页面，所以我们可以使用用户页面来创建自己的Blog。

在开始前，请确保你已经有了Github账号和Git的正确配置。没有的朋友可以先移步[Github注册](https://github.com/plans)并[安装配置Git](http://help.github.com/win-set-up-git/)。

首先，创建你的 Blog 仓库 username(请确保跟你的账号名相同).github.com:
<pre>
  <code>$ mkdir username.github.com
  $ cd username.github.com</code>
</pre>
新建一个 index.html 文件，像下面这样:

{% highlight html linenos %}
<!doctype html>
<html>
<head>
<title>Hello</title>
</head>

<body>
<h1>Hello!</h1>
</body>
</html>
{% endhighlight %}

初始化仓库、提交并push到Github:
<pre>
  <code>$ git init
  $ git add .
  $ git commit -a -m 'init commit.'
  $ git remote add origin
  $ git push origin master</code>
</pre>
现在你打开 username.github.com 就可以看到刚才新建的页面了，就是这么简单。当然也可以为你的Blog仓库绑定独立域名，具体做法就是：

1. 在你的仓库中新建内容为 www.youdomain.com 的 CNAME 文件；
2. 在你的域名管理页或者是DNS解析的地方，增加一个记录，记录类别为CNAME(Alias)类型.

<p class="note">*Note：如果你在CNAME中填写的是顶级域名，就得设置DNS的记录类别为A(Host)型，并设置主机为207.97.227.245。详细介绍请移步Github的<a href="http://pages.github.com">Pages</a>页面。</p>

接下来我们只需要按照自己的喜好设计页面。首先认识下Jekyll的文件及目录配置:
<pre>
  .
  |-- _config.yml
  |-- _includes
  |-- _layouts
  |   |-- default.html
  |   `-- post.html
  |-- _plugins
  |-- _posts
  |   |-- yyyy-mm-dd-title.markdown
  |   `-- yyyy-mm-dd-title.markdown
  |-- _site
  `-- index.html
</pre>

### _config.yml
保存Jekyll配置的文件。虽然绝大部分选项可以通过命令行参数指定，但将它们写入配置文件可以使你在每次执行时不必记住它们。

### _includes
该目录存放可以与_layouts和_posts混合、匹配并重用的文件。Liquid标签{&#37; include file.ext &#37;}可以用于嵌入文件_includes/file.ext。

### _layouts
该目录存放用来插入帖子的网页布局模板。页面布局基于类似博客平台的“一个帖子接一个帖子”的原则，通过YAML前置数据定义。Liquid标签用于在页面上插入帖子的文本内容。

### _plugins
可以增加你自己的插件。

### _posts
该目录下存放的可以说成是你的“动态内容”。这些文件的格式很重要，它们的文件命名一定要遵循 yyyy-mm-dd-title.html|markdown|textile 规则。每一个帖子的固定链接URL可以作弹性的调整，但帖子的发布日期和转换所使用的标记语言会根据且仅根据文件名中的相应部分来识别。

### _site
Jekyll自动生成的，所以可以忽略，如果你有在本地安装Jekyll并预览了的话，可以使用.gitignore设置Git停止对本目录的跟踪。

### index.html 和所有的 HTML/Markdown/Textile 文件
所有的HTML/Markdown/Textile文件都可以包含 YAML 配置，这类文件都会被Jekyll解析。

现在你可以在自己的仓库中配置好你自己的目录及文件，也可以clone我的仓库，然后修改。

<pre>
  <code>$ git clone https://github.com/hzmook/hzmook.github.com.git</code>
</pre>

修改完后就可以push你的代码到Github上，看到结果了。刚才有说到本地预览，如果你想在本地预览后，确保没错误再push的话，就需要在本地安装Jekyll，下面介绍下Jekyll的安装方法。

一、安装Ruby运行环境和RubyGem:Windows用户只要下载 [RubyInstaller](http://rubyforge.org/frs/download.php/74298/rubyinstaller-1.9.2-p180.exe '点击下载')。下载安装后请手动升级gem.

<pre>
  <code>$ gem update --system</code>
</pre>

二、安装DevKit。DevKit是windows平台编译和使用本地C/C++扩展包工具。用来模拟Linux平台下的 `make,gcc,sh` 进行编译。下载文件后，解压到 `C:\DevKit'，再通过命令行安装:

<pre>
  <code>$ cd C:\DevKit
  $ ruby dk.rb init
  $ ruby dk.rb install</code>
</pre>

三、安装并检查刚才的DevKit安装是否成功。如果成功安装，则DevKit也就安装成功，如果不成功，请重新安装DevKit。

<pre>
  <code>$ gem install jekyll</code>
</pre>

四、安装Rdiscount，这个是用来解析Markdown标记的解析包。如果你使用Textile的话，就是安装Kramdown。

<pre>
  <code>$ gem install rdiscount</code>
</pre>

所有的环境和依赖包都安装成功后，进入你的仓库目录，用下面的命令便可启动Jekyll，并在本地预览了，预览地址默认为 `127.0.0.1:4000`，当然你也可以通过 _config.yml 配置:

<pre>
  <code>jekyll --server</code>
</pre>

###补充：Windows平台上的中文支持

在Windows平台上，如果出现类似如下的错误信息：

<pre>
  <code>c:/Ruby192/lib/ruby/gems/1.9.1/gems/jekyll-0.11.0/lib/jekyll/convertible.rb:29:in `read_yaml’: invalid byte sequence in GBK (ArgumentError)
  ...</code>
</pre>

可能需要作如下修改：

将文件
<pre>
  <code>c:/Ruby192/lib/ruby/gems/1.9.1/gems/jekyll-0.11.0/lib/jekyll/convertible.rb</code>
</pre>
中的第27行的内容
<pre>
  <code>self.content = File.read(File.join(base, name))</code>
</pre>
修改为
<pre>
  <code>self.content = File.read(File.join(base, name), :encoding => "utf-8")</code>
</pre>

另外，你的日志等源码文件可能都需要保存为无“BOM”的“UTF-8”编码格式。


<div style="margin-top:20px">参考及相关资料：</div>

- <http://pages.github.com/>
- <https://github.com/mojombo/jekyll/wiki>
- <http://blog.envylabs.com/2009/08/publishing-a-blog-with-github-pages-and-jekyll/>
- <http://chen.yanping.me/cn/blog/2012/03/18/github-pages-step-by-step/>
- <http://www.soimort.org/tech-blog/2011/11/19/introduction-to-jekyll_zh.html>