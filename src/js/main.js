(function() {
    requirejs.config({
        paths: {
            // google analytics
            "Analytics": "google_analytics_universal",
            // "Analytics": "google_analytics_classic",
            "Popover": "popover",
            "ContentTabs": "content_tabs",
            "AccordionContent": "accordion_content",
            "DropdownMenu": "dropdown_menu",
            "CookieDough": "cookie_dough",
            'ColorShift': 'color_shift',
            // jQuery
            "jquery": '../components/jquery/dist/jquery.min',
            // demo
            "demo": '../../demo/js/demo'
        }
    });
    require(['demo', 'Analytics'], function(Demo, Analytics) {
        Demo.init();
        return Analytics.track();
    });
}).call(this);
