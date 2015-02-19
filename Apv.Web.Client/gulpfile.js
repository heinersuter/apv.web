var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var rename = require("gulp-rename");
var ftp = require('gulp-ftp');
var connect = require('gulp-connect');
var prompt = require('gulp-prompt');
var gutil = require('gulp-util');
var replace = require('gulp-replace');

var baseUrl = '';

gulp.task('prepareLocal', function (done) {
    baseUrl = 'http://localhost:49538';
	return done;
});

gulp.task('prepareRemote', function (done) {
    baseUrl = 'http://heinersuter.ch/apvwebapi';
	return done;
});

gulp.task('prepareDeploy', function (done) {
    baseUrl = '/apvwebapi';
	return done;
});

gulp.task('index', function () {
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

gulp.task('setUrl', function (done) {
    gulp.src(['apvWebApp/archive/archiveItemGroupService.js'])
		.pipe(replace(/^(\s*return \$resource\(")(\S*)(\/api\/ArchiveItemGroup\/:id\/"\);)/gmi, '$1' + baseUrl + '$3'))
		.pipe(gulp.dest('apvWebApp/archive/'))
		.on('end', done);
});

gulp.task('ftp', function () {
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
				));
		}));
});

gulp.task('connect', function () {
    connect.server({
        root: 'apvWebApp'
    });
});

gulp.task('default', ['prepareLocal', 'setUrl', 'index']);
gulp.task('remote', ['prepareRemote', 'setUrl', 'index', 'connect']);
gulp.task('deploy', ['prepareDeploy', 'setUrl', 'index', 'ftp']);
