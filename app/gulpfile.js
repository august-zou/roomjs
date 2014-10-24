var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var less = require('gulp-less');

var paths = {
  scripts: ['js/**/*.js'],
  styles: ['css/style.less']
};

gulp.task('scripts', function(){
  return gulp.src(paths.scripts)
         .pipe(concat(app.js)) 
         .pipe(gulp.dest('dest/js'));
});

gulp.tash('styles', function(){
  return gulp.src(paths.styles)
         .pipe(less())
         .pipe(gulp.dest('dest/css'));
});

gulp.task('watch',function(){
  watch(paths.scripts,function(files,cb){
    gulp.start('scripts',cb);
  });
  watch(path.styles,function(files,cb){
    gulp.start('styles',cb);
  });
});

gulp.task('default', ['scripts','styles']);
