require.config({
    "paths": {
      "app": "../app",
      "jquery": '../bower_components/jquery/jquery',
      "jcarousel": '../bower_components/jcarousel/dist/jquery.jcarousel'
    },
    "shim": {
        "jquery.jcarousel": ["jquery"]
    }
});
require(['app']);