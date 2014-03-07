'use strict'
var SERVER_PORT = 9000;

module.exports = function ( grunt ) {

    require( 'load-grunt-tasks' )( grunt );

    // Project configuration.
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),
        uglify: { // TASK
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: { //TARGET
                files: {
                   'min/<%= pkg.name %>.min.js': ['web/js/**/*.js']
                }
            }
        },
        jsbeautifier: {
            files: [ 'web/js**/*.js', '!node_modules/**' ],
            options: {
                config: 'config/js-beautify.json'
            }
        },
        connect: {
            server: {
                options: {
                    port: SERVER_PORT,
                    // change this to '0.0.0.0' to access the server from outside
                    hostname: 'localhost',
                    keepalive: true
                },
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: [ 'web/js/**/*.js' ],
                tasks: [ 'jshint' ]
            },
            css: {
                files: [ 'web/css/**/*.css' ],
                tasks: [ 'csslint' ]
            }
        },
        jshint: {
            all: {
                src: [ 'web/js/**/**.js' ],
            },
            options: {
                jshintrc: "config/jshint.json",
                reporter: require( 'jshint-stylish' )
            }
        },
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: [ 'web/css/**/main.css' ]
            }
        }
    } );

    // Default task(s).
    //grunt.registerTask('default', ['uglify']);
    grunt.registerTask( 'default', 'Log some stuff.', function () {
        grunt.log.write( 'Logging some stuff...' ).ok();
    } );

};
