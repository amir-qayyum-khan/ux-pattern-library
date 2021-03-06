require.config({
    baseUrl: '/public/js',
    paths: {
        jquery: "/public/js/jquery.min",
        svg4everybody: "/public/js/svg4everybody.min",
        modernizr: "/public/js/modernizr-custom",
        afontgarde: "/public/js/afontgarde",
        edxicons: "/public/js/edx-icons"
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'afontgarde': {
            exports: 'AFontGarde'
        }
    }
});

require([
    'jquery',
    '/public/js/ui.js',
    '/public/js/svg4everybody.min.js',
    '/public/js/modernizr-custom.js',
    'afontgarde',
    '/public/js/edx-icons.js'
    ],
    function($, Ui) {}
);
