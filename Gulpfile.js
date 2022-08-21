const gulp = require('gulp');
const gp_clean = require('gulp-clean');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

gulp.task('build', function () {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        return reject(err);
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join('\n')));
      }
      resolve();
    });
  });
});

gulp.task('clean', function () {
  const destPaths = 'wwwroot/dist/';
   return gulp.src(destPaths + "*.*", { read: false })
      .pipe(gp_clean({ force: true }));
});

gulp.task('watch', function () {
  gulp.watch('src/*.js',)
});

gulp.task('default', gulp.series(['watch','clean','build']));
