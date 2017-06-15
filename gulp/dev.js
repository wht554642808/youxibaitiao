

import gulp from 'gulp';
import sequence from 'gulp-sequence';

gulp.task('dev', sequence(
    ['clean:dev'],
    ['webpack:dev']
));