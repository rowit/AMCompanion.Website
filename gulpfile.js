var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint');

gulp.task('css-concat', function() {
    gulp.src(['css/*.css'])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist/'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('js-concat', function() {
    gulp.src(["js/vendors/angular.min.js","js/app.js","js/**/*.js"])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('css/*.css', ['css-concat']);
    gulp.watch('js/**/*.js', ['js-concat']);
});

gulp.task('generate', ['css-concat', 'js-concat']);
gulp.task('generate + watch', ['css-concat', 'js-concat', "watch"]);

gulp.task('lint', function() {
    return gulp.src(['js/**/*.js', '!js/vendors/*'])
        .pipe(jshint())
        .pipe(jshint.reporter('default', { verbose: true }));

});
