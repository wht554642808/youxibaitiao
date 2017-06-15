import gulp from 'gulp';
import webpack from 'gulp-webpack';
import webpackConfig from '../../webpack.config.js';

gulp.task('webpack:dev', () => {
    return gulp.src('./src/pages/index/app.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./build'));
});









