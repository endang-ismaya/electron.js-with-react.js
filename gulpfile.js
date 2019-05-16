// gulp configuration
const gulp = require('gulp');
// gulp plugins
const browserify = require('gulp-browserify');
const concatCss = require('gulp-concat-css');
const run = require('gulp-run');
// const htmlclean = require('gulp-htmlclean'); // html
// const concat = require('gulp-concat');

const src = 'src/';
const build = 'build/';

// javascript
function js() {
  const out = build + 'js/';

  return gulp
      .src(src + '/js/render.js')
      .pipe(
          browserify({
            transform: 'reactify',
            extensions: 'browserify-css',
            debug: true,
          })
      )
      .on('error', function(err) {
        console.error('Error!', err.message);
      })
      .pipe(gulp.dest(out));
}

// html
function html() {
  return gulp.src(src + '/**/*.html');
}

// css
function css() {
  const out = build + 'css/';
  return gulp
      .src(src + 'css/*.css')
      .pipe(concatCss('app.css'))
      .pipe(gulp.dest(out));
}

// watch for file changes
function watch(done) {
  // html changes
  gulp.watch(src + 'html/**/*', html);
  // css changes
  gulp.watch(src + 'scss/**/*', css);
  // js changes
  gulp.watch(src + 'js/**/*', js);

  done();
}

// run serve
function serve() {
  run('electron build/main.js').exec();
}

exports.build = gulp.parallel(html, css, js);
exports.default = gulp.series(exports.build, watch, serve);
