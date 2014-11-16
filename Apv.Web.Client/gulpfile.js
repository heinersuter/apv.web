var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var bowerFiles = require('main-bower-files');

gulp.task('default', function () {
    gulp.src('./src/index.html')
        .pipe(plugins.inject(
            gulp.src(bowerFiles(), { read: false }), { name: 'bower' }))
        //.pipe(plugins.inject(
        //    plugins.es.merge(plugins.cssFiles, gulp.src('./src/app/**/*.js', { read: false }))))
        .pipe(gulp.dest('./src'));
});
