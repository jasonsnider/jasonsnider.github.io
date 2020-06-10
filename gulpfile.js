var gulp = require('gulp');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify-es').default;
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var scss = require('gulp-sass');

function buildMainCSS(){

  var full = gulp.src([
    'src/scss/main.scss'
  ])
  . pipe(scss())
  . pipe(concat('main.css'))
  . pipe(gulp.dest('dist/css'));

  var min = gulp.src([
    'src/scss/main.scss'
  ])
  . pipe(scss())
  . pipe(cleanCSS())
  . pipe(concat('main.min.css'))
  . pipe(gulp.dest('dist/css'));

  return merge(min, full);
}

function buildMainJS() {

  var full = gulp.src([
    'src/js/main.js'
  ])
  .pipe(concat('main.js'))
  .pipe(gulp.dest('dist/js'));

  var min = gulp.src([
    'src/js/main.js',
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));

  return merge(full, min);
}

function watchFiles() {
  gulp.watch(['./src/scss/**/*.scss'], buildMainCSS);
  gulp.watch('./src/js/**/*.js', buildMainJS);
}

gulp.task('build-main-css', buildMainCSS);

gulp.task('build-main-js', buildMainJS);

gulp.task('default', watchFiles);

gulp.task('watch', watchFiles);
