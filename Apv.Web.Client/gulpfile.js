var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var rename = require("gulp-rename");

gulp.task('default', function () {
    gulp.src('./src/index.template.html')
        .pipe(rename('index.html'))
        .pipe(inject(gulp.src(mainBowerFiles(), { read: false }), { name: 'bower', addPrefix: '', relative: true }))
        .pipe(inject(gulp.src(['./src/**/*.js', './src/**/*.css'], { read: false }), { addPrefix: '', relative: true }))
        .pipe(gulp.dest('./src'));
});
