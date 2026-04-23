const gulp = require('gulp');
const babel = require('gulp-babel');
const concatCss = require('gulp-concat-css');
const run = require('gulp-run');

const src = 'src/';
const build = 'build/';

function js() {
  const out = build + 'js/';
  return gulp
    .src(src + 'js/**/*.js')
    .pipe(
      babel({
        presets: ['@babel/preset-react'],
      })
    )
    .on('error', function(err) {
      console.error('Error!', err.message);
      this.emit('end');
    })
    .pipe(gulp.dest(out));
}

function html() {
  return gulp.src(src + 'html/**/*.html').pipe(gulp.dest(build + 'html/'));
}

function electron() {
  return gulp.src(src + 'electron/**/*.js').pipe(gulp.dest(build));
}

function css() {
  const out = build + 'css/';
  return gulp
    .src(src + 'css/**/*.css')
    .pipe(concatCss('app.css'))
    .pipe(gulp.dest(out));
}

function watch(done) {
  gulp.watch(src + 'html/**/*.html', html);
  gulp.watch(src + 'css/**/*.css', css);
  gulp.watch(src + 'js/**/*.js', js);
  gulp.watch(src + 'electron/**/*.js', electron);
  done();
}

function serve() {
  return run('electron build/main.js').exec();
}

exports.build = gulp.parallel(html, css, js, electron);
exports.default = gulp.series(exports.build, watch, serve);