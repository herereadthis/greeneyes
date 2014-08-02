// Content Tabs
//
// This module will create tiny modals that will appear adjacent to the item on
// which you click.
// https://github.com/herereadthis/greeneyes/blob/master/src/js/popover.js
// 
// It is useful for displaying help text.

(function() {
    define(['jquery'], function($) {
        var exports,  makeItHappen, moduleName;
        exports = {};
        moduleName = "popover";

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
