var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var bowerFiles = require('main-bower-files');

gulp.task('default', function () {
    gulp.src('./src/index.html')
        .pipe(plugins.inject(
            gulp.src(bowerFiles(), { read: false }), { name: 'bower', addPrefix: '', relative: true }))
        .pipe(plugins.inject(
            gulp.src(['./src/**/*.js', './src/**/*.css'], { read: false }), { addPrefix: '', relative: true }))
        .pipe(gulp.dest('./src'));
});
