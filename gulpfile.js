const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

const src = 'src/';
const build = 'build/';

function js() {
  return gulp
    .src(src + 'js/**/*.js')
    .pipe(babel({presets: ['@babel/preset-react']}))
    .on('error', function(err) {
      console.error('Babel Error:', err.message);
      this.emit('end');
    })
    .pipe(gulp.dest(build + 'js/'));
}

function html() {
  return gulp.src(src + 'html/**/*.html').pipe(gulp.dest(build + 'html/'));
}

function electron() {
  return gulp.src(src + 'electron/**/*.js').pipe(gulp.dest(build));
}

function css() {
  return gulp
    .src([src + 'css/**/*.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(concat('app.css'))
    .pipe(gulp.dest(build + 'css/'));
}

function watch(done) {
  gulp.watch(src + 'html/**/*.html', html);
  gulp.watch(src + 'css/**/*.css', css);
  gulp.watch(src + 'js/**/*.js', js);
  gulp.watch(src + 'electron/**/*.js', electron);
  done();
}

exports.build = gulp.parallel(html, css, js, electron);
exports.watch = gulp.series(exports.build, watch);
exports.default = exports.build;