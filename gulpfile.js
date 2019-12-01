const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task("sass", function () {
  return gulp.src('./source/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task("watch", function () {
  gulp.watch('./source/styles/**/*.scss', gulp.series('sass'));
});