module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
            css: {
                src: [
                    'css/*.css',
                    '!css/style.min.css'
                ],
                dest: 'css/generated/style.css'
            },
            js : {
                src : [
                    "js/vendors/angular.min.js",
                    "js/vendors/*.js",
                    "js/app.js",
                    "js/controllers/*.js",
                    "js/components/*.js",
                    "js/*.js",
                    "!js/combined.js"
                ],
                dest : 'js/generated/script.js'
            }
        },
        autoprefixer: {
            single_file: {
                src: 'css/generated/style.css',
                dest: 'css/generated/style.css'
            }
        },
        cssmin: {
            css: {
                src: 'css/generated/style.css',
                dest: 'css/generated/style.min.css'
            }
        },
        uglify : {
            js: {
                files: {
                    'js/generated/script.min.js' : [ 'js/generated/script.js' ]
                }
            }
        },
        watch: {
            css:
            {
                files: ['css/*',"!**/generated/**.css"],
                tasks: ['concat:css','autoprefixer', 'cssmin']
            },
            js:
            {
                files: ['js/**/*.js',"!**/generated/**.js"],
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