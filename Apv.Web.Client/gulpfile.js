var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var rename = require("gulp-rename");
var ftp = require('gulp-ftp');
var connect = require('gulp-connect');
var prompt = require('gulp-prompt');
var gutil = require('gulp-util');

gulp.task('default', function () {
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
        .pipe(gulp.dest('.'));
});

gulp.task('deploy', function () {
    return gulp.src('/')//it may be anything
    .pipe(prompt.prompt({
        type: 'password',
        name: 'pass',
        message: 'Please enter the password for webland ftp:'
    }, function (res) {
        gulp.src(['apvWebApp/**'])
			.pipe(ftp({
				host: 'heinersuter.ch',
				user: 'heinersuter',
				pass: res.pass,
				remotePath: '/httpdocs'
			}))
			.pipe(gutil.noop(
			));
    }));
});

gulp.task('connect', function () {
    connect.server({
        root: 'apvWebApp'
    });
});