// Content Tabs
//
// This module will create a menu listing such that pressing any of the list
// items will expand to show more content
// https://github.com/herereadthis/greeneyes/blob/master/src/js/accordion.js
// 
// You will want to use it for compressing a lot of content to only show what
// the user wants to read.

(function() {
    define(['jquery'], function($) {
        var exports,  makeItHappen, moduleName;
        exports = {};
        moduleName = "accordion_content";

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
