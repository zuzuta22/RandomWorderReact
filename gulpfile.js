var gulp       = require('gulp');
var plumber    = require('gulp-plumber');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var webserver  = require('gulp-webserver');

var SERVER_PORT = 4000;

gulp.task('copy-index', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'))
});

gulp.task('build', ['copy-index'], function () {
  return browserify('./src/js/app.js')
    .transform(babelify, {presets:["react"]})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('watch', ['serve'], function () {
  gulp.watch(['./src/**/*.js'],['build']);
});

gulp.task('serve', function () {
  gulp.src('./build/')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: SERVER_PORT
    }));
});

gulp.task('default', ['watch', 'build']);
