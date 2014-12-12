var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var mainBowerFiles = require('main-bower-files');
var del = require('del');

gulp.task('default', function () {
    gulp.src('./src/index.html')
        .pipe(plugins.inject(
            gulp.src(mainBowerFiles(), { read: false }), { name: 'bower', addPrefix: '', relative: true }))
        .pipe(plugins.inject(
            gulp.src(['./src/**/*.js', './src/**/*.css'], { read: false }), { addPrefix: '', relative: true }))
        .pipe(gulp.dest('./src'));
});

gulp.task('deploy', [
	'deploy-clean', 
	'deploy-src', 
	'deploy-libs'], function () {
});

gulp.task('deploy-clean', function (cb) {
    return del(['./deploy/'], cb);
});

gulp.task('deploy-src', function () {
    return gulp.src(['./src/**'], { "base": "./src/" })
        .pipe(gulp.dest('./deploy/'));
});

gulp.task('deploy-libs', function () {
    return gulp.src(mainBowerFiles())
		.pipe(gulp.dest('./deploy/lib/'));
});

gulp.task('deploy-inject-libs', function () {
    gulp.src('./deploy/index.html')
        .pipe(plugins.inject(
			gulp.src(['./deploy/lib/*.js', './deploy/lib/*.css'], { read: false }), { name: 'bower', addPrefix: '', relative: true }))
		.pipe(gulp.dest('./'));
});
