/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/17
 */

import gulp from 'gulp';
import include from 'gulp-file-include';



gulp.task('html:dev', function () {
    return gulp.src('./src/pages/index/index.html')
        .pipe(include())
        .pipe(gulp.dest('./build'));
});

