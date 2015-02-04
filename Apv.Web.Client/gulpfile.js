var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var rename = require("gulp-rename");
var ftp = require('gulp-ftp');
var connect = require('gulp-connect');
var prompt = require('gulp-prompt');

gulp.task('default', function () {
    gulp.src('./index.template.html')
        .pipe(rename('index.html'))
        .pipe(inject(gulp.src(mainBowerFiles(), { read: false }), { name: 'bower', addPrefix: '', relative: true }))
        .pipe(inject(gulp.src(['./apvWebApp/**/*.js', './apvWebApp/**/*.css'], { read: false }), { addPrefix: '', relative: true }))
        .pipe(gulp.dest('.'));
});

gulp.task('deploy', function () {
    return gulp.src('/')//it may be anything
    .pipe(prompt.prompt({
        type: 'password',
        name: 'pass',
        message: 'Please enter the password for webland ftp:'
    }, function (res) {
        gulp.src(['./**'])
        .pipe(ftp({
            host: 'alsolos.ch',
            user: 'www614',
            pass: res.pass,
            remotePath: '/'
        }));
    }));
});

gulp.task('connect', function () {
    connect.server({
    });
});