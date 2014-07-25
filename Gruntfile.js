
// The "wrapper" function
module.exports = function(grunt) {
    // Do grunt-related things in here
    // Project configuration.
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        // imports the JSON metadata stored in package.json
        pkg: grunt.file.readJSON('package.json'),
        // compiles LESS file to minified CSS
        paths: {
            src: './src',
            build: './build',
            components: './src/components'
        },
        requirejs: {
            build: {
                options: {
                    baseUrl: "<%= paths.src %>/js/",
                    mainConfigFile: "<%= paths.src %>/js/main.js",
                    name: "main",
                    out: "<%= paths.build %>/js/main.js",
                    optimize: 'uglify2',
                }
            }
        },
        uglify: {
            options: {
                preserveComments: false
            },
            require: {
                files: {
                    '<%= paths.build %>/js/require.js': ['<%= paths.components %>/**/require.js']
                }
            }
        },
        watch: {
            // runs less task when any less files change
            js: {
                files: ['./src/js/*'],
                tasks: ['requirejs']
            }
        }
    });

    grunt.registerTask('default', [
        'requirejs',
        'uglify'
    ]);
    grunt.registerTask('server', [
        'watch'
    ]);
};