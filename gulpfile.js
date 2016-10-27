var gulp = require('gulp'),
    log = require('gulp-util').log,
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    rename = require('gulp-rename'),
    rupture = require('rupture'),
    autoprefixer = require('autoprefixer-stylus'),
    webpack = require('gulp-webpack');
    connect = require('gulp-connect');

var config = {
  watch: './src/**/**/*.*',
  server: {
    port: '8000',
    path: './dist'
  },
  html: {
    src: './src/index.jade',
    destination: 'dist/'
  },
  views: {
    src: './src/templates/*.jade',
    destination: 'dist/templates'
  },
  css: {
    src: './src/styles/style.styl',
    destination: 'dist/css'
  },
  js: {
    src: './src/js/**',
    destination: 'dist/js'
  },
  img: {
    src: './src/img/**',
    destination: 'dist/img'
  },
  fonts: {
    src: './src/fonts/**',
    destination: 'dist/fonts'
  }
};

gulp.task("connect",function(){
  connect.server({
    port:config.server.port,
    livereload:true,
    root:config.server.path});
});

gulp.task('templates', function () {
  gulp.src(config.html.src)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(config.html.destination))
    .pipe(connect.reload());
});

gulp.task('views', function () {
  gulp.src(config.views.src)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(config.views.destination))
    .pipe(connect.reload());
});

gulp.task('styles', function () {
  gulp.src(config.css.src)
    .pipe(stylus({
      include: ['./node_modules/normalize-styl/','./src/styles/site'],
			'include css': true,
			use: [autoprefixer("iOS >=7","last 1 Chrome version")]
    }))
    .pipe(stylus({
      use: [rupture()]
    }))
    .pipe(rename('main.css'))
    .pipe(gulp.dest(config.css.destination))
    .pipe(connect.reload());
});

gulp.task('scripts', function () {
  return gulp.src('src/js/script.js')
    .pipe(webpack({output: {
        filename: '[name].js',
      }}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function () {
  gulp.src(config.img.src)
    .pipe(gulp.dest(config.img.destination))
    .pipe(connect.reload());
});
gulp.task('fonts', function () {
  gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.destination))
    .pipe(connect.reload());
});


gulp.task('watch', function () {
  log('Watching file');
  gulp.watch(config.watch, ['build']);
});

gulp.task('build', ['templates','views','styles','scripts','images','fonts']);
gulp.task('default',['build','connect','watch']);
