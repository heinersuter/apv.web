var gulp = require('gulp');
var inject = require('gulp-inject');
// var gulpLoadPlugins = require('gulp-load-plugins');
// var plugins = gulpLoadPlugins();
// var mainBowerFiles = require('main-bower-files');

gulp.task('default', function () {
    gulp.src('./src/index.html')
        // .pipe(inject(
            // gulp.src(mainBowerFiles(), { read: false }), { name: 'bower', addPrefix: '', relative: true }))
        .pipe(inject(
            gulp.src(['./src/**/*.js', './src/**/*.css'], { read: false }), { relative: true }))
        .pipe(gulp.dest('./src'));
});
