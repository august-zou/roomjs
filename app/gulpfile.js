var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var watch = require('gulp-watch');

var paths = {
  scripts: ['js/**/*.js'],
  styles: ['css/style.less']
};

gulp.task('scripts', function(){
  return gulp.src(paths.scripts)
         .pipe(concat('app.js')) 
         .pipe(gulp.dest('dest/js'));
});

gulp.task('styles', function(){
  return gulp.src(paths.styles)
         .pipe(less())
         .pipe(gulp.dest('dest/css'));
});

gulp.task('watch',function(){
  watch(paths.scripts,function(files,cb){
    gulp.start('scripts',cb);
  });
  watch(paths.styles,function(files,cb){
    gulp.start('styles',cb);
  });
});

gulp.task('default', ['scripts','styles']);
