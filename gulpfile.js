
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber-notifier'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin');

gulp.task('imageMin', () =>
  gulp.src('assets/img/*')
      .pipe(plumber())
      .pipe(imagemin())
      .pipe(gulp.dest('assets/img/'))
);

gulp.task('css', function(){
  gulp.src('assets/css/app.scss')
      .pipe(plumber())
      .pipe(sass({
        outputStyle : 'compressed'
      }))
      .pipe(autoprefixer())
      .pipe(gulp.dest('assets/css/'));
});

// Javascript minification
gulp.task('min-scripts', function() {
  gulp.src('assets/js/app.js')
    .pipe(plumber()) // Checks for errors
    .pipe(uglify()) // Minifies the js
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/js'));
});

// Javascript file concatenation
gulp.task('concat', function() {
  gulp.src(['assets/js/jquery.min.js', 'assets/js/slideout.min.js', 'assets/js/jquery.modal.min.js', 'assets/js/app.min.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('watch', function(){
  gulp.watch('assets/css/**/*.scss', ['css']);
});

gulp.task('default', ['imageMin', 'css', 'watch']);

