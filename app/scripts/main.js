require.config({
    baseUrl: 'bower_components',
    paths: {
        jquery: '../bower_components/jquery/jquery',
        jcarousel: '../bower_components/jcarousel/dist/jquery.jcarousel',
        app: '../app'
    },
    shim: {
        jcarousel: ['jquery'],
        app: ['jquery', 'jcarousel']
    }
});

require(['app']);
