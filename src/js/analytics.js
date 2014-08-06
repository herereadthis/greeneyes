// Google Analytics, defined as an AMD for RequireJS
//
// This module replaces the standard Google analytics plugin.
// https://github.com/herereadthis/greeneyes/blob/master/src/js/analytics.js
//
// The main advantage here is that you will get to remove inline JavaScript on
// your page. Note: Unlike the other Greeneyes modules, this one does not need
// a [data-module=""] attribute.
//
// To trigger this, return Analytics.track() in your main.js file
// In your HTML, specify at <body data-google-analytics="MY_GA_NUMBER" />
// Or you can return Analytics.track('MY_GA_NUMBER') and don't put anything in
// the body tag.

(function() {
    define(['jquery'], function($) {
        var exports = {
            track: function(accountId) {
                var ga, s, _gaq;
                accountId = $("body").data("google-analytics") || accountId;
                _gaq = window._gaq = _gaq || [];
                ga = document.createElement("script");
                s = document.getElementsByTagName('script')[0];
                _gaq.push(['_setAccount', accountId]);
                _gaq.push(['_trackPageview']);
                console.log(_gaq);
                ga.type = "text/javascript";
                ga.async = true;
                ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + ".google-analytics.com/ga.js";
                return s.parentNode.insertBefore(ga, s);
            }
        };
        return exports;
    });
}).call(this);
