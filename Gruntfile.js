module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
            css: {
                src: [
                    'css/*',
                    '!css/style.min.css'
                ],
                dest: 'generated/style.css'
            },
            js : {
                src : [
                    "js/vendors/angular.min.js",
                    "js/vendors/*.js",
                    "js/app.js",
                    "js/controllers/*.js",
                    "js/*.js",
                    "!js/combined.js"
                ],
                dest : 'generated/script.js'
            }
        },
        cssmin: {
            css: {
                src: 'generated/style.css',
                dest: 'css/style.min.css'
            }
        },
        uglify : {
            js: {
                files: {
                    'js/combined.js' : [ 'generated/script.js' ]
                }
            }
        },
        watch: {
            css:
            {
                files: ['css/*',"!css/style.min.css"],
                tasks: ['concat:css', 'cssmin']
            },
            js:
            {
                files: ['js/**/*.js',"!js/combined.js"],
                tasks: ['concat:js', 'uglify']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [ 'concat:css', 'cssmin:css', 'concat:js' , 'uglify:js' ]);
};