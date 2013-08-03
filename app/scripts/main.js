require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        jcarousel: '../bower_components/jcarousel/dist/jquery.jcarousel'
    }
});

require(['app', 'jquery', 'jcarousel'], function (app, $) {
    'use strict';
    // exclude Modernizr because it needs to be loaded before html elements
    console.log(app);
    //console.log('Running requireJS %s', requirejs.version);
    console.log('Running jQuery %s', $().jquery);
    console.log('Running jCarousel %s', $.jCarousel.version);
});
