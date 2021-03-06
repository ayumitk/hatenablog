// Gulp
const gulp = require('gulp');

// CSS
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const csscomb = require('gulp-csscomb');
const sass = require('gulp-sass');

// --------------------------------------------------------------------
// Tasks
// --------------------------------------------------------------------
gulp.task('default', function () {

  return gulp.watch('./src/*.scss', function () {

    return gulp.src('./src/*.scss')
      .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
      }))
      .pipe(autoprefixer({
        browsers: ['last 2 version'],
        grid: true
      }))
      .pipe(csscomb())
      .pipe(sass({
        outputStyle: 'compressed'
      })
      .on('error', sass.logError))
      .pipe(gulp.dest('./docs'));
  });
});












