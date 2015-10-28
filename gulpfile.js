var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var minifyHTML = require('gulp-minify-html');
var ngAnnotate = require('gulp-ng-annotate');
var babel = require('gulp-babel');
var gls = require('gulp-live-server');
var mergeStream = require('merge-stream');
var plumber = require("gulp-plumber");

var paths = {
    scriptsApplication: [
        "app/app.js",
        "app/**/*.js",
        "!app/vendors/**/*.min.js"
    ],
    scriptsVendors: [
        "app/vendors/js/angular.min.js",
        "app/vendors/**/*.min.js"
    ],
    sassFiles: [
        "app/**/*.scss"
    ],
    cssFiles: [
        "app/**/*.css"
    ],
    images: 'img/**/*',
    htmlFiles: 'app/**/*.html'
};

gulp.task('generateJS', function () {

    stream = mergeStream();

    stream.add(gulp.src(paths.scriptsVendors));
    stream.add(
        gulp.src(paths.scriptsApplication)
            .pipe(plumber())
            .pipe(babel())
            .pipe(ngAnnotate())
            .pipe(uglify())
    );
    stream.add(gulp.src(paths.htmlFiles)
            .pipe(plumber())
            .pipe(minifyHTML({
                quotes: true
            }))
            .pipe(templateCache({
                standalone: false,
                module: "amCompanion",
                root: "/app/"
            }))
    );

    return stream
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('css', function () {

    stream = mergeStream();

    stream.add(
        gulp.src(paths.sassFiles)
            .pipe(plumber())
            .pipe(concat("all.scss"))
            .pipe(sass())
            .pipe(autoprefixer())
    );
    stream.add(
        gulp.src(paths.cssFiles)
            .pipe(autoprefixer())
    );
    return stream
        .pipe(plumber())
        .pipe(cssmin())
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest('dist/'));

});

gulp.task('serve', ["generateJS", "css"], function () {

    //1. run your script as a server
    var server = gls.new('server.js');
    server.start();

    gulp.watch(paths.scriptsApplication, ['generateJS']);
    gulp.watch(paths.scriptsVendors, ['generateJS']);
    gulp.watch(paths.htmlFiles, ['generateJS']);
    gulp.watch(paths.sassFiles, ['css']);
    gulp.watch(paths.cssFiles, ['css']);


    gulp.watch(['dist/**'], function (file) {
        server.notify.apply(server, [file]);
    });

});
