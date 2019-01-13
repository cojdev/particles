const gulp = require('gulp'),

    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),

    // css
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),

    // folders
    src = 'src',
    dest = 'docs';

// Parse and minify Sass
gulp.task('sass', () => (
    gulp.src(src + '/scss/**/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest + '/css'))
    .pipe(browserSync.reload({stream: true}))
));

// BrowserSync
gulp.task('browser-sync', () => {
    browserSync.init({
        proxy: 'localhost',
        open: 'ui',
    });
});

// Watch edits
gulp.task('watch', () => {
    gulp.watch(src + '/**/*.scss', ['sass']);
});

// Run tasks once
gulp.task('run', ['sass']);

// Sync Changes
gulp.task('sync', ['run', 'watch', 'browser-sync'], () => {
    gulp.watch(dest + '/*.html').on('change', browserSync.reload);
    gulp.watch(dest + '/css/*.css').on('change', browserSync.reload);
});

// Default task
gulp.task('default', ['run', 'watch']);