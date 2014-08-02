// Content Tabs
//
// This module creates a box with a list of tabs at the top that will switch
// out the content below
// https://github.com/herereadthis/greeneyes/blob/master/src/js/content_tabs.js

(function() {
    define(['jquery'], function($) {
        var exports,  makeItHappen, moduleName;
        exports = {};
        moduleName = "content_tabs";

        makeItHappen = function($this) {
            console.log($this.html());
        };
        exports.init = function($this) {
            var element;
            if ($this !== void 0) {
                return makeItHappen($this);
            }
            else {
                element = $('[data-module="' + moduleName + '"]');
                return element.each(function() {
                    return makeItHappen($(this));
                });
            }
        };
        return exports;
    });
}).call(this);
