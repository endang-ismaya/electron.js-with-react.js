const gulp = require('gulp');
const browserify = require('gulp-browserify');
const concatCss = require('gulp-concat-css');
const run = require('gulp-run');

const src = './process';
const app = './app';

gulp.task('js', function() {
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
      .pipe(gulp.dest(app + '/js'));
});

gulp.task('html', function() {
  gulp.src(src + '/**/*.html');
});

gulp.task('css', function() {
  gulp
      .src(src + '/css/*.css')
      .pipe(concatCss('app.css'))
      .pipe(gulp.dest(app + '/css'));
});

// gulp.task('fonts', function() {
//   gulp
//       .src('node_modules/bootstrap/dist/fonts/**/*')
//       .pipe(gulp.dest(app + '/fonts'));
// });

gulp.task('watch', ['serve'], function() {
  gulp.watch(src + '/js/**/*', ['js']);
  gulp.watch(src + '/css/**/*.css', ['css']);
  gulp.watch([app + '/**/*.html'], ['html']);
});

gulp.task('serve', ['html', 'js', 'css'], function() {
  run('electron app/main.js').exec();
});

// gulp.task('default', ['watch', 'fonts', 'serve']);
gulp.task('default', ['watch', 'serve']);
