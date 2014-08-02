// Drop Down Menu

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
