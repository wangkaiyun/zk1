/**
 * Created by Carry on 2017/10/9.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('minijs',function(){
   gulp.src('./js/*.js')
       .pipe(concat('main.js'))
       .pipe(uglify())
       .pipe(gulp.dest('./js'));
});
