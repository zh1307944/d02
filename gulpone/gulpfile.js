const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin')
const csso= require('gulp-csso')

var less = require('gulp-less');
var path = require('path');
gulp.task('less', function () {
    return gulp.src('./src/css/demo2.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(gulp.dest('./dist/css'));
  });

gulp.task('first',callback=>{
    console.log('第一个执行了')
    gulp.src('./src/css/demo.css')
    .pipe(gulp.dest('demo/css'));
    callback();
})


gulp.task('html1', function() {
  return gulp.src('./src/*.html')
      .pipe(gulp.dest('dist'));
});


gulp.task('htmlmin',()=>{
    gulp.src('./src/index.html')
    .pipe(fileinclude())
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest('./dist'))
})


function cssorun(){
    return gulp.src('./src/css/*.css')
    .pipe(csso())
    .pipe(gulp.dest('./dist/css'))
}

function htmlrun(){
    return gulp.src('./src/js/index.html')
    .pipe(fileinclude())
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest('./dist/js'))

}

// exports.cssorun=cssorun
exports.default=gulp.series(cssorun,htmlrun)