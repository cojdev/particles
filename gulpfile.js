/**
 * Author: Charles Ojukwu
 */

var gulp = require('gulp'),

    // General
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    filter = require('gulp-filter'),
    browserSync = require('browser-sync').create(),

    // CSS
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),

    // Javascript
    uglify = require('gulp-uglify');

var src = 'src',
    dest = 'docs';

// Parse and minify Sass
gulp.task('sass', function() {
return gulp.src(src + '/scss/**/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('main.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest + '/css'))
    .pipe(filter('**/*.css'))
    .pipe(rename('main.min.css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest + '/css'))
    .pipe(browserSync.reload({stream: true}))
});

// Concat and uglify Javascript files
gulp.task('js', function() {
return gulp.src([src + '/js/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(dest + 'js'))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest + 'js'))
});

// BrowserSync
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'localhost',
        open: 'ui'
    });
});

// Watch edits
gulp.task('watch', function(){
gulp.watch(src + '/**/*.scss', ['sass']);
gulp.watch(src + '/js/**/*.js', ['js']);
});

// Run tasks once
gulp.task('run', ['sass', 'js']);

// Sync Changes
gulp.task('sync', ['run', 'watch', 'browser-sync'], function() {
    gulp.watch(dest + '/js/*.js').on('change', browserSync.reload);
    gulp.watch(dest + '/*.html').on('change', browserSync.reload);
    gulp.watch(dest + '/css/*.css').on('change', browserSync.reload);
});

// Default task
gulp.task('default', ['run', 'watch']);