// setup google-analytics
(function(d) {
	var s = d.getElementsByTagName('script'), id;
	if (id = s[s.length - 1].id) {
		d.writeln('<script type="text/javascript">');
		d.writeln("var _gaq = _gaq || [];");
		d.writeln("_gaq.push(['_setAccount', '" + id + "']);");
		d.writeln("_gaq.push(['_trackPageview']);");
		d.writeln("(function(d) {");
		d.writeln("var ga = d.createElement('script'); ga.type = 'text/javascript'; ga.async = true;");
		d.writeln("  ga.src = ('https:' == d.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';");
		d.writeln("  var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);");
		d.writeln("})(document);");
		d.writeln('<\/script>');
	}
})(document);