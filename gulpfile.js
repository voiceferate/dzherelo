'use strict'

var gulp        = require('gulp');
var fileinclude = require('gulp-file-include');
var uglify      = require('gulp-uglify');
var browserSync = require('browser-sync');
var concatCss	  = require('gulp-concat-css');
var cssnano		  = require('gulp-cssnano');
var rename		  = require('gulp-rename');


var paths = {
  css:  ['app/css/*.css'],
  html: ['app/html/*.html', 'app/html/components/*.html'],
  js:   ['app/js/*.js']
};


gulp.task('fileinclude', function() {
  return gulp.src(['app/html/*.html', '!app/html/_*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'app/html'
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('fileincludeJs', function() {
  return gulp.src(['app/js/*.js', '!app/js/_*.js'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'app/js'
    }))
    // .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('concatCss', function () {
  return gulp.src('app/css/*.css')
    .pipe(concatCss("main.css"))
	  .pipe(cssnano())
	  .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'dist'
		}
	});
});


gulp.task('watch', ['browser-sync', 'concatCss', 'fileinclude', 'fileincludeJs'], function() {
	gulp.watch(paths.css, ['concatCss']);
	gulp.watch(paths.html, ['fileinclude', browserSync.reload]);
  gulp.watch(paths.js, ['fileincludeJs']);
});


// gulp.task('watch', ['concatCss', 'fileincludeJs'], function() {
//   gulp.watch(paths.css, ['concatCss']);
//   gulp.watch(paths.html, ['fileinclude', browserSync.reload]);
//   gulp.watch(paths.js, ['fileincludeJs']);
// });