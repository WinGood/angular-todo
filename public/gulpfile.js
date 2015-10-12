'use strict';

var gulp       = require('gulp'),
  sass         = require('gulp-sass'),
  concat       = require('gulp-concat'),
  livereload   = require('gulp-livereload'),
  autoprefixer = require("gulp-autoprefixer"),
  csso         = require('gulp-csso');

var vendor = './app/assets/vendor/';

gulp.task('js', function () {
  gulp.src('development/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('app/'))
    .pipe(livereload());
});

gulp.task('html', function () {
  gulp.src('development/**/*.html')
    .pipe(gulp.dest('app/'))
    .pipe(livereload());
});

gulp.task('sass', function () {
  gulp.src('development/sass/**/*')
    .pipe(sass())
    .pipe(concat('style.min.css'))
    .pipe(csso())
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('app/assets/css/'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('development/**/*.js', ['js']).on('change', livereload.changed);
  gulp.watch('development/sass/**/*.scss', ['sass']);
  gulp.watch('development/**/*.html', ['html']).on('change', livereload.changed);
});

gulp.task('vendor', function () {
  gulp.src([vendor + 'angular/angular.js',
    vendor + 'angular-resource/angular-resource.js',
    vendor + 'angular-route/angular-route.js'
  ])
    .pipe(concat('angular.concat.js'))
    .pipe(gulp.dest('app/assets/js/'));
});

gulp.task('default', [
  'vendor',
  'html',
  'js',
  'sass',
  'watch'
]);
