module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

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
                    "js/vendors/*.js",
                    "js/app.js",
                    "js/controllers/*.js",
                    "js/components/*.js",
                    "js/services/*.js",
                    "js/*.js",
                    "!js/combined.js"
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
                files: ['js/*'],
                tasks: ['concat:js', 'uglify']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', [ 'concat:css','autoprefixer','cssmin:css', 'concat:js' , 'uglify:js' ]);
};