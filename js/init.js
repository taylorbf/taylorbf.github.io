$(document).foundation();

var md = window.markdownit({
	'html': true
});

function getText(url){
    var result = null;
    $.ajax( { url: url,
              type: 'get',
              dataType: 'html',
              success: function(data) {
								var mdHTML = md.render(data);
								$("#content").html(mdHTML)
							}
            }
    );
    FileReady = true;
    return result;
}

// GOOGLE ANALYTICS
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-17840817-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
