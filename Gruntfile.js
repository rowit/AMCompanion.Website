module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            allFiles: [
                'js/**/*.js',
                '!js/vendors/*'
            ],
            options: {
                jshintrc: true,
                reporter: require('jshint-stylish')
            }
        },

        concat: {
            css: {
                src: [
                    'css/*.css',
                ],
                dest: 'dist/style.css'
            },
            js : {
                src : [
                    "js/vendors/angular.min.js",
                    "js/app.js",
                    "js/**/*.js"
                ],
                dest : 'dist/script.js'
            }
        },
        autoprefixer: {
            single_file: {
                src: 'dist/style.css',
                dest: 'dist/style.css'
            }
        },
        cssmin: {
            css: {
                src: 'dist/style.css',
                dest: 'dist/style.min.css'
            }
        },
        uglify : {
            js: {
                files: {
                    'dist/script.min.js' : [ 'dist/script.js' ]
                }
            }
        },
        watch: {
            css:
            {
                files: ['css/*'],
                tasks: ['concat:css','autoprefixer', 'cssmin']
            },
            js:
            {
                files: ['js/**/*.js'],
                tasks: ['concat:js', 'uglify',"jshint"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', [ 'concat:css','autoprefixer','cssmin:css', 'concat:js' , 'uglify:js' ]);
};
