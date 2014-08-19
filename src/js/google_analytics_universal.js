// Google Analytics, defined as an AMD for RequireJS
//
// This module replaces the standard Google analytics plugin.
// https://github.com/herereadthis/greeneyes/blob/master/src/js/analytics.js
//
// The main advantage here is that you will get to remove inline JavaScript on
// your page. Note: Unlike the other Greeneyes modules, this one does not need
// a [data-module=""] attribute.

(function() {
    define(['jquery'], function($) {
        var $, exports;
        exports = {
            track: function(accountId) {
                var accountId = $("body").data("google-analytics") || accountId;
                (
                    function (i,s,o,g,r,a,m) {
                        i['GoogleAnalyticsObject'] = r;
                        i[r] = i[r] || function(){
                            (i[r].q = i[r].q || []).push(arguments)
                        },
                        i[r].l = 1 * new Date();
                        a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                        a.async = 1;
                        a.src = g;
                        m.parentNode.insertBefore(a,m)
                    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

                ga('create', accountId, 'auto');
                ga('send', 'pageview');
                console.log('Analytics Tracking Code: ' + accountId);
            }
        };
        return exports;
    });
}).call(this);
