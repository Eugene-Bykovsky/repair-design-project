const gulp = require('gulp');
const sass = require('gulp-sass');

// Styles compile
gulp.task("sass", function () {
    return gulp.src('./source/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));
});

// Watchers
gulp.task("watch", function () {
    gulp.watch('./source/scss/**/*.scss', gulp.series('sass'));
});