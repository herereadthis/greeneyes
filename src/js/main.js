(function() {
    requirejs.config({
        paths: {
            // google analytics
            "Analytics": "analytics",
            // jQuery
            "jquery": '../components/jquery/dist/jquery.min',
        }
    });
    require(['jquery', 'Analytics'], function($, Analytics) {
        return Analytics.track();
    });
}).call(this);
