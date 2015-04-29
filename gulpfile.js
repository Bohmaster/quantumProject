var gulp = require('gulp'),
    compass = require('gulp-compass');
    inject = require('gulp-inject');

gulp.task('default', function() {
	console.log('Gulp running')
});

gulp.task('watch', ['index'], function() {
	gulp.watch('./client/app/assets/scripts/*.js');
});

gulp.task('index', function() {
	var target = gulp.src('./client/app/index.html');
	var sources = gulp.src(
		[
			'./client/app/assets/scripts/*.js',
		 	'./client/app/assets/styles/css/*.css'
		],
		{
			read: false
		}
	);

	return target.pipe(inject(sources))
		.pipe(gulp.dest('./client/app'));
});

