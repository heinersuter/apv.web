var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var mainBowerFiles = require('main-bower-files');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('default', function (callback) {


    return gulp.src('./deploy/index.html')
        .pipe(plugins.inject(
            gulp.src(mainBowerFiles(), { read: false })
                .pipe(gulp.dest('./deploy/lib/'), { relative: true })))
        .pipe(gulp.dest('./deploy/'));






    //return runSequence('deploy-clean', 'deploy-copy', 'deploy-inject', callback);
});

gulp.task('deploy-clean', function (callback) {
    return del(['./deploy/'], callback);
});

gulp.task('deploy-copy', function () {
    gulp.src(['./src/**'], { "base": "./src/" })
        .pipe(gulp.dest('./deploy/'));

    return gulp.src(mainBowerFiles(), { read: false })
        .pipe(gulp.dest('./deploy/lib/'));
});

gulp.task('deploy-inject', function () {
    return gulp.src('./deploy/index.html')
        .pipe(plugins.inject(
            gulp.src(['./deploy/app/**/*.js', './deploy/app/**/*.css'], { read: false }), { addPrefix: '', relative: true }))
        .pipe(plugins.inject(
            gulp.src(['./deploy/lib/**/*.js', './deploy/lib/**/*.css'], { read: false }), { name: 'bower', addPrefix: '', relative: true }))
        .pipe(gulp.dest('./deploy/'));

});
