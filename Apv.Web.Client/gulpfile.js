var bowerFiles = require('main-bower-files'),
    inject = require('gulp-inject'),
    stylus = require('gulp-stylus'),
    es = require('event-stream');

gulp.src('./src/index.html')
  .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
  .pipe(gulp.src('./src/app/**/*.js', {read: false}))
  .pipe(gulp.dest('./build'));