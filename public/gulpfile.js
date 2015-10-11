'use strict';

var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  csso = require('gulp-csso');

var vendor = './app/assets/vendor/';

gulp.task('js', function () {
  gulp.src('development/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('app/'))
});

gulp.task('html', function () {
  gulp.src('development/**/*.html')
    .pipe(gulp.dest('app/'))
});

gulp.task('sass', function () {
  gulp.src('development/sass/**/*')
    .pipe(sass())
    .pipe(concat('style.min.css'))
    .pipe(csso())
    .pipe(gulp.dest('app/assets/css/'));
});

gulp.task('watch', function () {
  gulp.watch('development/**/*.js', ['js']);
  gulp.watch('development/sass/**/*.scss', ['sass']);
  gulp.watch('development/**/*.html', ['html']);
});

gulp.task('vendor', function () {
  gulp.src([vendor + 'angular/angular.js',
    vendor + 'angular-resource/angular-resource.js',
    vendor + 'angular-route/angular-route.js'
  ])
    .pipe(concat('angular.concat.js'))
    .pipe(gulp.dest('app/assets/js/'));
});

gulp.task('webserver', function () {
  gulp.src('app/')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8080
    }));
});

gulp.task('default', [
  'vendor',
  'html',
  'js',
  'sass',
  'webserver',
  'watch'
]);
