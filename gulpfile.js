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
  gulp.src(imgSrc).pipe(changed(imgDst)).pipe(imagemin()).pipe(gulp.dest(imgDst));
});

gulp.task('js', function () {
  var libSrc = [
    "./src/assets/js/global-variables.js",
    "./src/assets/js/lib/jquery.min.js",
    "./src/assets/js/lib/jquery-ui.min.js",
    "./src/assets/js/lib/angular.min.js",
    "./src/assets/js/lib/angular-route.js",
    "./src/assets/js/lib/bootstrap.min.js",
    "./src/assets/js/lib/sortable.js",
    "./src/assets/js/lib/highlight.js",
    "./src/assets/js/lib/bootstrap-switch.min.js",
    "./src/assets/js/lib/bootstrap-select.js",
    "./src/assets/js/lib/bootstrap-tagsinput.js",
    "./src/assets/js/lib/amChart/amcharts.js",
    "./src/assets/js/lib/amChart/serial.js",
    "./src/assets/js/lib/amChart/funnel.js",
    "./src/assets/js/lib/amChart/pie.js",
    "./src/assets/js/lib/amChart/amstock.js",
    "./src/assets/js/lib/amChart/ammap.js",
    "./src/assets/js/lib/amChart/worldLow.js",
    "./src/assets/js//lib/amChart/blur.js",
    "./src/app/pages/maps/widgets/leaflet/lib/leaflet.js",
    "./src/app/pages/maps/widgets/google-maps/lib/google-maps.js",
    "./src/app/pages/modals/widgets/notifications/lib/angular-toastr.tpls.js"
  ];
  var src = [
    "./src/app/app.js",
    "./src/app/components/widgets/widgets.js",
    "./src/app/components/sidebar/sidebar.js",
    "./src/app/components/pageTop/pageTop.js",
    "./src/app/pages/dashboard/dashboard.js",
    "./src/app/pages/buttons/buttons.js",
    "./src/app/pages/charts/charts.js",
    "./src/app/pages/icons/icons.js",
    "./src/app/pages/profile/profile.js",
    "./src/app/pages/tables/tables.js",
    "./src/app/pages/typography/typography.js",
    "./src/app/pages/form/layouts/layouts.js",
    "./src/app/pages/form/inputs/inputs.js",
    "./src/app/common/directives/autoFocus.js",
    "./src/app/common/directives/autoExpand.js",
    "./src/app/common/directives/animatedChange.js",
    "./src/app/common/directives/zoomIn.js",
    "./src/app/pages/dashboard/widgets/calendar/lib/moment.min.js",
    "./src/app/pages/dashboard/widgets/calendar/lib/fullcalendar.min.js",
    "./src/app/pages/dashboard/widgets/calendar/calendar.js",
    "./src/app/pages/dashboard/widgets/todo/todo.js",
    "./src/app/components/pieCharts/lib/jquery.easing.min.js",
    "./src/app/components/pieCharts/lib/jquery.easypiechart.min.js",
    "./src/app/components/pieCharts/pieCharts.js",
    "./src/app/pages/dashboard/widgets/amChart/amChart.js",
    "./src/app/components/backTop/lib/jquery.backTop.js",
    "./src/app/components/backTop/backTop.js",
    "./src/app/components/msgCenter/msgCenter.js",
    "./src/app/pages/dashboard/widgets/amChartMap/amChartMap.js",
    "./src/app/pages/dashboard/widgets/timeline/timeline.js",
    "./src/app/pages/dashboard/widgets/chart/lib/Chart.min.js",
    "./src/app/pages/dashboard/widgets/chart/chart.js",
    "./src/app/pages/charts/widgets/areaChart/areaChart.js",
    "./src/app/pages/charts/widgets/barChart/barChart.js",
    "./src/app/pages/charts/widgets/funnelChart/funnelChart.js",
    "./src/app/pages/charts/widgets/lineChart/lineChart.js",
    "./src/app/pages/charts/widgets/pieChart/pieChart.js",
    "./src/app/pages/form/inputs/widgets/switch/switch.js",
    "./src/app/pages/form/inputs/widgets/select/select.js",
    "./src/app/pages/form/inputs/widgets/tagsInput/tagsInput.js",
    "./src/app/pages/profile/profileModal/profileModal.js",
    "./src/app/common/controllers/mainCtrl.js",
    "./src/app/pages/maps/maps.js",
    "./src/app/pages/maps/widgets/leaflet/leaflet.js",
    "./src/app/pages/maps/widgets/google-maps/google-maps.js",
    "./src/app/pages/maps/widgets/map-bubbles/map-bubbles.js",
    "./src/app/pages/maps/widgets/map-lines/map-lines.js",
    "./src/app/pages/modals/modals.js",
    "./src/app/pages/modals/widgets/notifications/notifications.js"
  ];
  var dst = './src/release/js/';

  gulp.src(libSrc).pipe(concat('lib.min.js')).pipe(uglify()).pipe(gulp.dest(dst));
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