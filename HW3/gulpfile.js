var _ = require('lodash');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var babel = require('gulp-babel');
var zip = require('gulp-zip');

var PATHS = ['animals.js', 'vehicles.js'];
var ES6_FILES = ['planets.js'];

var options = {
  rulePaths: ['.eslint_rules']
};

gulp.task('eslint', function() {
  _.each(PATHS, function(path) {
    return gulp.src(path)
      .pipe(eslint(options))
      .pipe(eslint.format());
  });
});

gulp.task('compile', function() {
  var src_f = PATHS.concat(ES6_FILES);
  return gulp.src(src_f)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('zip', function () {
  var src_f = PATHS.concat(ES6_FILES);
  for (var i = 0; i < src_f.length; i++) {
    src_f[i] = './build/' + src_f[i];
  }
  return gulp.src(src_f)
    .pipe(zip('files.zip'))
    .pipe(gulp.dest(''));
});

gulp.task('default', ['eslint']);
