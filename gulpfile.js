var
  gulp            = require('gulp'),
  del             = require('del'),
  uglify          = require('gulp-uglify'),
  concat          = require('gulp-concat'),
  jshint          = require('gulp-jshint'),
  jshintStylish   = require('jshint-stylish')
;

var basePaths = {
  src: 'src/',
  dest: 'dist/'
}

gulp.task('clean', function () {
  return del([basePaths.dest + '**.*']);
});

gulp.task('copy', ['clean'], function () {
  return gulp
    .src(basePaths.src + '**/*')
    .pipe(gulp.dest(basePaths.dest));
});

gulp.task('make', ['clean'], function () {
  return gulp
    .src(basePaths.src + '/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('angular-sparkline-charts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(basePaths.dest));

})

gulp.task('default', function () {
  gulp.start('make');
});
