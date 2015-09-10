// gulp pattern library + site configuration

// pattern library
var dest                        = './public',
    src                         = './pattern-library',
    local                       = './_site',

// documentation site
    pldoc_src                   = './pldoc',
    pldoc_dest                  = './public/pldoc';

module.exports                  = {
    browserSync:                {
        server:                 {
            // Serve up our build folder
            baseDir:            local
        }
    },
    styles:                     {

        // settings
        settings: {
            outputStyle: 'expanded' // set to expanded for local troubleshooting
        },

        // pattern library
        src:                    src + '/sass',
        src_files:              src + '/sass/**/*.scss',
        src_static:             src + '/css',
        src_static_files:       src + '/css/**/*.css',
        dest:                   dest + '/css',
        local:                  local + '/public/css',

        // documentation site
        pldoc_src:              pldoc_src + '/static/sass',
        pldoc_src_files:        pldoc_src + '/static/sass/**/*.scss',
        pldoc_src_static:       src + '/css',
        pldoc_dest:             pldoc_dest + '/css',
        pldoc_local:            local + '/public/pldoc/css'
    },
    images:                     {
        // pattern library

        // TODO: resolve this string/concat issue to make abstracted out paths work
        // src:                    src + '/images',
        // src_files:              src + 'images/**',
        // dest:                   dest + '/images',
        // local:                  local + '/public/images',

        src:                    './pattern-library/images',
        src_files:              './pattern-library/images/**',
        dest:                   './public/images',
        local:                  './_site/public/images',

        // documentation site

        // TODO: resolve this string/concat issue to make abstracted out paths work
        // pldoc_src:              pldoc_src + '/static/images',
        // pldoc_src_files:        pldoc_src + '/static/images/**',
        // pldoc_dest:             pldoc_dest,
        // pldoc_local:            local + '/public/pldoc/images'

        pldoc_src:              './pldoc/static/images',
        pldoc_src_files:        './pldoc/static/images/**',
        pldoc_dest:             './public/pldoc/images',
        pldoc_local:            './_site/public/pldoc/images'
    },
    scripts:                    {
        // pattern library
        src:                    src + '/js/*.js',
        dest:                   dest + '/js',
        local:                  local + '/public/js',

        // documentation site
        pldoc_src:              pldoc_src + '/static/js',
        pldoc_src_files:        pldoc_src + '/static/js/**/*.js',
        pldoc_dest:             pldoc_dest + '/js',
        pldoc_local:            local + '/public/pldoc/js'
    },
    vendor:                     {
        // pattern library
        src:                    src + '/vendor/**',
        dest:                   dest + '/vendor',
        local:                  local + '/public/vendor',

        // documentation site
        pldoc_src:              pldoc_src + '/vendor/**',
        pldoc_dest:             pldoc_dest + '/vendor',
        pldoc_local:            local + '/public/pldoc/vendor'
    },
    jekyll:                     {
        home:                   'index.html',
        posts:                  '_posts/**/*',
        includes:               '_includes/**/*',
        examples:               'examples/**/*',
        layouts:                '_layouts/**/*'
    }
};

