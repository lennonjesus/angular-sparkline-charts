var
  gulp            = require('gulp'),
  del             = require('del'),
  uglify          = require('gulp-uglify'),
  concat          = require('gulp-concat'),
  jshint          = require('gulp-jshint'),
  jshintStylish   = require('jshint-stylish')
  bump            = require('gulp-bump')
;

var basePaths = {
  src: 'src/',
  dest: 'dist/'
};

gulp.task('clean', function () {
  return del([basePaths.dest + '**.*']);
});

gulp.task('copy', ['clean'], function () {
  return gulp
    .src(basePaths.src + '**/*')
    .pipe(gulp.dest(basePaths.dest));
});

gulp.task('build', ['clean', 'bump'], function () {
  return gulp
    .src(basePaths.src + '/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('angular-sparkline-charts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(basePaths.dest));

});

gulp.task('default', function () {
  gulp.start('build');
});

gulp.task('bump', function(){
  gulp.src(['./bower.json', './package.json'])
  .pipe(bump({type:'minor'}))
  .pipe(gulp.dest('./'));
});
