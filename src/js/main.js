(function() {
    requirejs.config({
        paths: {
            // google analytics
            "Analytics": "analytics",
            "Popover": "popover",
            "ContentTabs": "content_tabs",
            "AccordionContent": "accordion_content",
            "DropdownMenu": "dropdown_menu",
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
