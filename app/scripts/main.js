require.config({
    paths: {
        app: '../app',
        jquery: 'jquery-1.9.1.min',
        jcarousel: 'jquery.jcarousel'
    },
    shim: {
        jcarousel: ['jquery'],
        app: ['jquery', 'jcarousel']
    }
});

require(['app']);
