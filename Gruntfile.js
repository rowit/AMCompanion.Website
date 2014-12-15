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
        ngtemplates:    {
            amCompanion:{
                src:        ['index.html','partials/**/*.html'],
                dest:       'js/templates.js',
                standalone : true,
                options:    {
                    htmlmin: {
                        collapseBooleanAttributes:      true,
                        collapseWhitespace:             true,
                        removeAttributeQuotes:          true,
                        removeComments:                 true, // Only if you don't use comment directives!
                        removeEmptyAttributes:          true,
                        removeRedundantAttributes:      true,
                        removeScriptTypeAttributes:     true,
                        removeStyleLinkTypeAttributes:  true
                    }
                }
            }
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            strict: {
                options: {
                    import: 2
                },
                src: ['css/app.css']
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
                options: {
                    sourceMap: true,
                    sourceMapName: 'dist/script.min.js.map'
                },
                files: {
                    'dist/script.min.js' : [ 'dist/script.js' ]
                }
            }
        },
        watch: {
            html:
            {
                files:['partials/**/*.html','index.html'],
                tasks:['ngtemplates']
            },
            css:
            {
                files: ['css/*'],
                tasks: ['concat:css','autoprefixer', 'cssmin',"csslint"]
            },
            js:
            {
                files: ['js/**/*.js'],
                tasks: ['concat:js', 'uglify','jshint']
            }
        },
        copy: {
            main: {
                src:
                    [
                        'node_modules/bower-installer/components/**/*.min.js',
                        'node_modules/bower-installer/components/angular-i18n/angular-locale_fr-fr.js',
                    ],
                dest: 'js/vendors/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            }
        },
        bower: {
            install: {
                options:
                {
                    copy:false
                }
            }
        },
        clean: ["node_modules/bower-installer/components/"]
    });

    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', [ 'concat:css','autoprefixer','cssmin:css','csslint','ngtemplates','concat:js','uglify:js','jshint']);
    grunt.registerTask('bower-task', ["bower","copy","clean"]);
};
