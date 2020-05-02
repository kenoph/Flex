var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    minify = require('gulp-cssnano');


function taskLess() {
  return gulp.src('./static/stylesheet/style.less')
    .pipe(less())
    .pipe(minify())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./static/stylesheet'));
}

function taskCp(cb) {
  return gulp.src('./node_modules/font-awesome/**/*.{min.css,otf,eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('./static/font-awesome'));
}

function taskPygments(cb) {
  return gulp.src(['./static/pygments/*.css', '!./static/pygments/*min.css'])
    .pipe(minify())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./static/pygments'));
}

exports.default = gulp.series(taskLess, taskCp, taskPygments);
