'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files']
});

var _ = require('lodash');

gulp.task('dev-fonts', function () {
  return gulp.src($.mainBowerFiles())
      .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
      .pipe($.flatten())
      .pipe(gulp.dest(path.join(conf.paths.devDist, 'fonts')));
});

gulp.task('dev-copy-lib', function () {
  var assets = require('wiredep')(_.extend({}, conf.wiredep));
  var srcList = [];
  srcList.push.apply(srcList, assets.js);
  srcList.push.apply(srcList, assets.css);
  return gulp
      .src(srcList/*, { base: '.' }*/)
/*      .pipe($.rename(function (p) {
        p.dirname = p.dirname.replace(/\\/g, '/').replace('bower_components/', '');
        if (p.dirname.indexOf('/') !== -1) {
          p.dirname = p.dirname.substr(0, p.dirname.indexOf('/'));
        }
      }))*/
      .pipe(gulp.dest(path.join(conf.paths.devDist, 'lib')));
});

gulp.task('dev-css-replace', ['dev-copy-assets'], function() {
  return gulp.src(path.join(conf.paths.devDist, '*.html'))
      .pipe($.replace(/<link rel="stylesheet" href="\.\.\/bower_components\/.*\/(.*)"\s*?\/>/g, '<link rel="stylesheet" href="lib/$1" >'))
      .pipe(gulp.dest(conf.paths.devDist));
});

gulp.task('dev-js-replace', ['dev-copy-assets'], function() {
  return gulp.src(path.join(conf.paths.devDist, '.html'))
      .pipe($.replace(/<script src="\.\.\/bower_components\/.*\/(.*)"\s*?>/g, '<script src="lib/$1">'))
      .pipe(gulp.dest(conf.paths.devDist));
});

gulp.task('dev-copy-assets', ['inject', 'dev-copy-lib', 'dev-fonts'], function () {
  return gulp
      .src([
        conf.paths.src + '/**/*',
        path.join(conf.paths.tmp, '/serve/**/*')
      ])
      .pipe(gulp.dest(conf.paths.devDist));
});

gulp.task('dev-release', ['dev-css-replace', 'dev-js-replace']);
