var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require("gulp-concat");
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var eventStream = require('event-stream');

gulp.task("minify-404-css", function () {
  var vendorFiles = gulp.src("./src/assets/css/lib/bootstrap.min.css");
  var appFiles = gulp.src('./src/assets/css/404.scss').pipe(sass({ style: 'compressed' }).on('error', sass.logError));

  return eventStream.concat(vendorFiles, appFiles)
      .pipe(concat('404.min.css'))
      .pipe(autoprefix('last 4 version'))
      .pipe(minifyCSS())
      .pipe(gulp.dest("./src/release/css/"));
});

gulp.task("minify-auth-css", function () {
  var vendorFiles = gulp.src("./src/assets/css/lib/bootstrap.min.css");
  var appFiles = gulp.src('./src/assets/css/auth.scss').pipe(sass({ style: 'compressed' }).on('error', sass.logError));

  return eventStream.concat(vendorFiles, appFiles)
      .pipe(concat("auth.min.css"))
      .pipe(autoprefix('last 4 versions'))
      .pipe(minifyCSS())
      .pipe(gulp.dest("./src/release/css/"))
});

gulp.task("minify-css", ['minify-404-css', 'minify-auth-css'], function () {
  var vendorFiles = gulp.src("./src/assets/css/lib/*.css");
  var appFiles = gulp.src('./src/assets/css/main.scss').pipe(sass({ style: 'compressed' }).on('error', sass.logError));

  return eventStream.concat(vendorFiles, appFiles)
      .pipe(concat("index.min.css"))
      .pipe(autoprefix('last 2 versions'))
      .pipe(minifyCSS())
      .pipe(gulp.dest("./src/release/css/"))
});

var imgSrc = [
  './src/assets/img/*',
  './src/assets/pictures/*',
  './src/app/pages/dashboard/widgets/timeline/img/*',
  './src/app/pages/profile/img/*',
  './src/app/pages/icons/widgets/kameleon-img/*',
  './src/assets/js/lib/amChart/images/*',
  './src/app/pages/maps/widgets/leaflet/images/*',
];

gulp.task('imagemin', function () {
  var imgDst = './src/release/img/';
  return gulp
      .src(imgSrc)
      .pipe(changed(imgDst))
      .pipe(imagemin())
      .pipe(gulp.dest(imgDst));
});

gulp.task('js', function () {
  var libSrc = [
    "./src/assets/js/lib/jquery.min.js",
    "./src/assets/js/lib/angular.min.js",
    "./src/assets/js/global-variables.js",
    "./src/assets/js/lib/**/*.js",
    "./src/app/**/lib/**/*.js"
  ];

  var src = [
    "./src/app/**/*.js",
    "!./src/app/**/lib/**/*.js"
  ];
  var dst = './src/release/js/';

  gulp.src(libSrc).pipe(concat('lib.min.js')).pipe(stripDebug()).pipe(uglify()).pipe(gulp.dest(dst));
  gulp.src(src).pipe(concat('bundle.min.js')).pipe(uglify()).pipe(gulp.dest(dst));
});

gulp.task('font', function () {
  var fontSrc = './src/assets/css/fonts/*';
  var fontDst = './src/release/fonts/';

  gulp.src(fontSrc).pipe(gulp.dest(fontDst));
});

gulp.task("watch", function () {
  gulp.watch(["./src/app/**/*.css", "./src/assets/**/*.css", "./**/*.scss "], ["minify-css"]);
  gulp.watch(imgSrc, ["imagemin"]);
  gulp.watch(["./src/app/**/*.js", "./src/assets/**/*.js"], ["js"]);
});

gulp.task("init", ["minify-css", "imagemin", "js", "font"]);

gulp.task('default', ['init']);