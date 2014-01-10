var gulp = require('gulp');
var myth = require('gulp-myth');
var swig = require('gulp-swig');

gulp.task('styles', function () {
	gulp.src('./myth/*.css')
		.pipe(myth())
		.pipe(gulp.dest('./client/css/'));
});

gulp.task('templates', function () {
	gulp.src('./views/*.html')
		.pipe(swig({ load_json: true }))
		.pipe(gulp.dest('./client/'));
});

gulp.task('server', function () {
	require('./server');

	gulp.watch('./myth/**', function () {
		gulp.run('styles');
	});

	gulp.watch('./views/**', function () {
		gulp.run('templates');
	});
});

gulp.task('default', function () {
	gulp.run('styles');
	gulp.run('templates');
});
