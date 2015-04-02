var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var rename = require("gulp-rename");
var ftp = require('gulp-ftp');
var prompt = require('gulp-prompt');
var gutil = require('gulp-util');
var replace = require('gulp-replace');
var webserver = require('gulp-webserver');

var baseUrl = '';

gulp.task('prepareLocal', function (done) {
    baseUrl = 'http://localhost:49538';
    done();
});

gulp.task('prepareRemote', function (done) {
    baseUrl = 'http://heinersuter.ch/apvwebapi';
    done();
});

gulp.task('prepareDeploy', function (done) {
    baseUrl = '/apvwebapi';
    done();
});

gulp.task('setUrl', function (done) {
    gulp.src(['apvWebApp/module.js'])
        .pipe(replace(/(^\s*\.constant\("BaseUrl", ")(\S*)("\);$)/gmi, '$1' + baseUrl + '$3'))
        .pipe(gulp.dest('apvWebApp/'))
        .on('end', done);
});

gulp.task('index', function (done) {
    gulp.src('apvWebApp/index.template.html')
        .pipe(rename('apvWebApp/index.html'))
        .pipe(inject(gulp.src(
            mainBowerFiles(),
            { read: false }),
            { name: 'bower', addPrefix: '', relative: false, ignorePath: 'apvWebApp' }))
        .pipe(inject(gulp.src(
            ['apvWebApp/**/*.js', '!apvWebApp/lib/**/*.js', 'apvWebApp/**/*.css', '!apvWebApp/lib/**/*.css'],
            { read: false }),
            { addPrefix: '', relative: false, ignorePath: 'apvWebApp' }))
        .pipe(gulp.dest('.'))
        .on('end', done);
});

gulp.task('ftp', function (done) {
    return gulp.src('anything')//it may be anything
        .pipe(prompt.prompt({
            type: 'password',
            name: 'pass',
            message: 'Please enter the password for hostfactory ftp:'
        }, function (promptResult) {
            gulp.src(['apvWebApp/**'])
                .pipe(ftp({
                    host: 'heinersuter.ch',
                    user: 'heinersuter',
                    pass: promptResult.pass,
                    remotePath: '/httpdocs'
                }))
                .pipe(gutil.noop(
                ))
                .on('end', done);
                }));
});

gulp.task('connect', function () {
    gulp.src('apvWebApp')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }));
});

gulp.task('default', ['prepareLocal', 'setUrl', 'index']);
gulp.task('remote', ['prepareRemote', 'setUrl', 'index']);
gulp.task('deploy', ['prepareDeploy', 'setUrl', 'index', 'ftp']);
