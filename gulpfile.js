/**
 * Created by romainseb on 02/04/15.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var ngTemplates = require('gulp-ng-templates');
var htmlmin = require('gulp-htmlmin');
var csslint = require('gulp-csslint');
var ngAnnotate = require('gulp-ng-annotate');
var bower = require('gulp-bower');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');


gulp.task('css', function () {
    gulp.src(['app/**/*.css'])
        .pipe(plumber())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
    gulp.src(["app/vendors/js/angular.min.js","app/vendors/js/*.js", "app/app.js", "app/**/*.js"])
        .pipe(plumber())
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('partials', function () {
    gulp.src(["app/**/*.html"])
        .pipe(plumber())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(ngTemplates({
            filename: 'templates.js',
            module: 'amCompanion',
            path: function (path, base) {
                return path.replace(base, '/app/');
            }
        }))
        .pipe(gulp.dest('./app/'));
});

gulp.task('js-lint', function () {
    return gulp.src(['app/**/*.js', '!app/vendors/**/*.js'])
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default', {verbose: true}));
});

gulp.task('css-lint', function () {
    return gulp.src(['app/**/*.css', '!app/vendors/**/*.css'])
        .pipe(plumber())
        .pipe(csslint('.csslintrc'))
        .pipe(csslint.reporter());
});

gulp.task('bower-ressource', function () {
    return bower().pipe(gulp.dest('tmp/'));
});

gulp.task('bower-copy', function () {
    gulp.src([
        'tmp/**/*.min.js',
        'tmp/**/angular-i18n/angular-locale_fr-fr.js'
    ])
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('app/vendors/js/'));
});

gulp.task('bower',
    [
        'bower-ressource',
        'bower-copy'
    ]
);

gulp.task('watch', function () {
    gulp.watch('app/**/*.css', ['css','css-lint']);
    gulp.watch('app/**/*.js', ['js','js-lint']);
    gulp.watch('app/**/*.html', ['partials']);
});

gulp.task('default',
    [
        'css',
        'js',
        'js-lint',
        'css-lint'
    ]
);

gulp.task('default + watch',
    [
        'css',
        'partials',
        'js',
        "watch"
    ]
);
