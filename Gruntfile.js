
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
        less: {
            greeneyes: {
                options: {
                    paths: ["<%= paths.src %>/less"],
                    // yuicompress: true,
                    // compress: true,
                    cleancss: true
                },
                files: {
                    "<%= paths.build %>/css/greeneyes.css": "<%= paths.src %>/less/greeneyes.less",
                    "<%= paths.build %>/css/demo.css": "<%= paths.src %>/less/demo.less"
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
                files: ['./src/js/*', './demo/js/*'],
                tasks: ['requirejs']
            }
        }
    });

    grunt.registerTask('default', [
        'less',
        'requirejs',
        'uglify'
    ]);
    grunt.registerTask('server', [
        'watch'
    ]);
};