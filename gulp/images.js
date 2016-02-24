'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

gulp.task('copyVendorImages',function () {
  return gulp.src([
    path.join(conf.wiredep.directory, '**/ammap/dist/ammap/images/**/*'),
    path.join(conf.wiredep.directory, '**/amcharts/dist/amcharts/images/**/*'),
    path.join(conf.wiredep.directory, '**/ionrangeslider/img/**/*')
  ])
    .pipe(gulp.dest(path.join(conf.paths.dist, '/assets/img/theme/vendor')));
});

