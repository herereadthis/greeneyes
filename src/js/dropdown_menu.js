// Drop Down Menu
//
// This module will create a nested menu where the child elements will be
// hidden by default and are toggled into view by clicking on the parent items.
// https://github.com/herereadthis/greeneyes/blob/master/src/js/dropdown_menu.js

(function() {
    define(['jquery'], function($) {
        var exports,  makeItHappen, moduleName;
        exports = {};
        moduleName = "dropdown_menu";

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
