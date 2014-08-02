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
        }
    });
    require(['jquery', 'Analytics'], function($, Analytics) {
        return Analytics.track();
    });
}).call(this);
