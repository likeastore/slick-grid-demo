var gulp = require('gulp');
var myth = require('gulp-myth');
var swig = require('gulp-swig');
var nodemon = require('gulp-nodemon');

gulp.task('styles', function () {
	gulp.src('./myth/*.css')
		.pipe(myth())
		.pipe(gulp.dest('./client/css'));
});

gulp.task('templates', function () {
	gulp.src('./views/*.html')
		.pipe(swig({ load_json: true, defaults: { cache: false }}))
		.pipe(gulp.dest('./client'));
});

gulp.task('server', ['default'], function () {
	gulp.src('./server.js').pipe(nodemon());
	gulp.run('watch');
});

gulp.task('watch', function () {
	gulp.watch('./myth/*.css', function () {
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
