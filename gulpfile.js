var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var eventStream = require('event-stream');
var templateCache = require('gulp-angular-templatecache');
var minifyHTML = require('gulp-minify-html');

var bootstrapCssSrc = 'bower_components/bootstrap/dist/css/bootstrap.min.css';

gulp.task('minify-404-css', function () {
  var vendorFiles = gulp.src(bootstrapCssSrc);
  var appFiles = gulp.src('src/assets/css/404.scss').pipe(sass({ style: 'compressed' }).on('error', sass.logError));

  return eventStream.concat(vendorFiles, appFiles)
      .pipe(concat('404.min.css'))
      .pipe(autoprefix('last 4 version'))
      .pipe(minifyCSS())
      .pipe(gulp.dest('release/css/'));
});

gulp.task('minify-auth-css', function () {
  var vendorFiles = gulp.src(bootstrapCssSrc);
  var appFiles = gulp.src('src/assets/css/auth.scss').pipe(sass({ style: 'compressed' }).on('error', sass.logError));

  return eventStream.concat(vendorFiles, appFiles)
      .pipe(concat('auth.min.css'))
      .pipe(autoprefix('last 4 versions'))
      .pipe(minifyCSS())
      .pipe(gulp.dest('release/css/'))
});

gulp.task('minify-css', ['minify-404-css', 'minify-auth-css'], function () {
  var vendorFiles = gulp.src([
    bootstrapCssSrc,
    'bower_components/bootstrap-select/dist/css/bootstrap-select.min.css',
    'bower_components/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css',
    'bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
    'bower_components/Ionicons/css/ionicons.min.css',
    'bower_components/font-awesome/css/font-awesome.min.css',
    'bower_components/animate.css/animate.min.css',
    'bower_components/angular-progress-button-styles/dist/angular-progress-button-styles.min.css'
  ]);
  var appFiles = gulp.src('src/assets/css/main.scss').pipe(sass({ style: 'compressed' }).on('error', sass.logError));

  return eventStream.concat(vendorFiles, appFiles)
      .pipe(concat('index.min.css'))
      .pipe(autoprefix('last 2 versions'))
      .pipe(minifyCSS())
      .pipe(gulp.dest('release/css/'))
});

var imgSrc = [
  'src/assets/img/*',
  'src/assets/pictures/*',
  'src/app/lookAndFeel/thumbs/*',
  'src/app/pages/dashboard/widgets/timeline/img/*',
  'src/app/pages/profile/img/*',
  'src/app/pages/icons/widgets/kameleon-img/*',
  'bower_components/amcharts/dist/amcharts/images/*',
  'bower_components/ammap/dist/ammap/images/*',
  'bower_components/leaflet/dist/images/*'
];

gulp.task('imagemin', function () {
  var imgDst = 'release/img/';
  return gulp
      .src(imgSrc)
      .pipe(changed(imgDst))
      .pipe(imagemin())
      .pipe(gulp.dest(imgDst));
});

gulp.task('js-lib', function(){
  var libSrc = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-route/angular-route.min.js',
    'bower_components/angular-touch/angular-touch.min.js',
    'bower_components/jquery-ui/jquery-ui.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/highlight/src/highlight.js',
    'bower_components/bootstrap-switch/dist/js/bootstrap-switch.min.js',
    'bower_components/bootstrap-select/dist/js/bootstrap-select.min.js',
    'bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js',
    'bower_components/moment/min/moment.min.js',
    'bower_components/amcharts/dist/amcharts/amcharts.js',
    'bower_components/amcharts/dist/amcharts/plugins/responsive/responsive.min.js',
    'bower_components/amcharts/dist/amcharts/serial.js',
    'bower_components/amcharts/dist/amcharts/funnel.js',
    'bower_components/amcharts/dist/amcharts/pie.js',
    'bower_components/amcharts-stock/dist/amcharts/amstock.js',
    'bower_components/ammap/dist/ammap/ammap.js',
    'bower_components/ammap/dist/ammap/maps/js/worldLow.js',
    'bower_components/jquery.easing/js/jquery.easing.min.js',
    'bower_components/angular-ui-sortable/sortable.js',
    'bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
    'bower_components/fullcalendar/dist/fullcalendar.min.js',
    'bower_components/Chart.js/Chart.min.js',
    'bower_components/leaflet/dist/leaflet.js',
    'bower_components/angular-toastr/dist/angular-toastr.tpls.min.js',
    'bower_components/angular-smart-table/dist/smart-table.min.js',
    'bower_components/slimScroll/jquery.slimscroll.min.js',
    'bower_components/angular-slimscroll/angular-slimscroll.js',
    'bower_components/hammerjs/hammer.min.js',
    'bower_components/AngularHammer/angular.hammer.min.js',
    'bower_components/angular-progress-button-styles/dist/angular-progress-button-styles.min.js',
    'src/app/components/backTop/lib/jquery.backTop.min.js'
  ];

  return gulp.src(libSrc)
      .pipe(concat('lib.min.js'))
      .pipe(stripDebug())
      .pipe(uglify())
      .pipe(gulp.dest('release/js/'));
});

gulp.task('js', function () {
  var src = [
    'src/assets/js/global-variables.js',
    'src/assets/js/amcharts-blur-theme.js',
    'src/app/**/*.js',
    '!src/app/**/lib/**/*.js'
  ];

  gulp.src(src).pipe(concat('bundle.min.js')).pipe(uglify()).pipe(gulp.dest('release/js/'));
});

gulp.task('font', function () {
  var fontSrc = [
    'src/assets/css/fonts/*',
    'bower_components/bootstrap/fonts/*',
    'bower_components/font-awesome/fonts/*',
    'bower_components/Ionicons/fonts/*',
  ];
  var fontDst = 'release/fonts/';

  gulp.src(fontSrc).pipe(gulp.dest(fontDst));
});

gulp.task('templateCache', function () {
  return gulp.src('src/app/**/*.html')
      .pipe(minifyHTML({ conditionals: true, spare: true, empty: true }))
      .pipe(templateCache({ root: 'app/', module: 'BlurAdmin' }))
      .pipe(gulp.dest('release/js'));
});

gulp.task('html', function () {
  return gulp.src('src/*.html')
      .pipe(minifyHTML({ conditionals: true, spare: true, empty: true }))
      .pipe(gulp.dest('release/'));
});

gulp.task('watch', function () {
  gulp.watch(['src/app/**/*.css', 'src/assets/**/*.css', './**/*.scss '], ['minify-css']);
  gulp.watch(imgSrc, ['imagemin']);
  gulp.watch(['src/app/**/*.js', 'src/assets/**/*.js'], ['js']);
  gulp.watch(['src/app/**/*.html'], ['templateCache']);
  gulp.watch(['src/*.html'], ['html']);
});

gulp.task('init', ['minify-css', 'imagemin', 'js-lib', 'js', 'font', 'templateCache', 'html']);

gulp.task('default', ['init']);