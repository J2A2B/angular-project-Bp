/*=============================================
=            Gulp Starter by @JA              =
=============================================*/

/**
*
* The packages we are using
* Not using gulp-load-plugins as it is nice to see whats here.
*
**/
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var browserSync  = require('browser-sync');
var prefix       = require('gulp-autoprefixer');
var plumber      = require('gulp-plumber');
var jshint       = require('gulp-jshint');
var stylish      = require('jshint-stylish');
var uglify       = require('gulp-uglify');
var rename       = require("gulp-rename");
var imagemin     = require("gulp-imagemin");
var pngquant     = require('imagemin-pngquant');
var inject       = require('gulp-inject');
var util         = require('gulp-util');
var gulpIf       = require('gulp-if');
var merge        = require('merge-stream');

/**
*
* Styles
* - Auto-Import
* - Compile
* - Compress/Minify
* - Catch errors (gulp-plumber)
* - Autoprefixer
*
**/



gulp.task('sass', function() {
  return gulp.src('src/assets/css/styles.scss')
  .pipe(inject(gulp.src(['**/*.scss'], {read: false, cwd: 'src/assets/css'}), {
    starttag: '/* IMPORTS */',
    endtag: '/* Fin des IMPORTS */',
    transform: function (filepath) {
      var res = '@import \'' + filepath + '\';';
      console.log(res);
      return res;
    }
  }))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'Android 2', 'Firefox ESR', 'ie 11'))
  .pipe(plumber())
  .pipe(gulp.dest('dist/assets/css'));
});

/**
*
* BrowserSync.io
* - Watch CSS, JS & HTML for changes
* - View project at: localhost:3000
*
**/
gulp.task('browser-sync', function() {
  browserSync.init(['dist/**/css/*.css', 'dist/**/*.js', 'src/**/*.html'], {
    server: {
      baseDir: './dist'
    }
  });
});


/**
*
* Javascript
* - Uglify
*
**/
gulp.task('scripts', function() {

  //source
  return gulp.src('src/assets/js/**/*.js')

  //uglify
  .pipe(uglify())
  // .pipe(uglify().on('error', util.log))

  //rename
  .pipe(rename({
    dirname: "min",
    suffix: ".min",
  }))

  .pipe(gulp.dest('dist/assets/js'))
});

/**
*
* Javascript
* - JsLint
*
**/
gulp.task('lint', function () {
  return gulp.src('src/assets/js/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish))
  .pipe(gulpIf(util.env.strict, jshint.reporter('fail')))
})

/**
*
* Images
* - Compress them!
*
**/
gulp.task('images', function () {
  return gulp.src('src/**/images/**/*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('dist'));
});

// gulp.task('photos', function () {
//   return gulp.src('src/**/images/photos/*')
//   .pipe(imagemin(imagemin.gifsicle()
//   }))
//   .pipe(gulp.dest('dist'));
// });

/**
*
* Copy
* - Copy the index.html!
*
**/
gulp.task('copy', function() {
    var copyHtml = gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
    var lib = gulp.src('src/lib/**/*')
    .pipe(gulp.dest('dist/lib'));

    return merge(copyHtml, lib);
});

/**
*
* Build task
* - Runs sass, scripts, copy and image tasks
*
**/
gulp.task('build', ['sass', 'scripts', 'images', 'copy']);

/**
*
* Default task
* - Runs sass, browser-sync, scripts and image tasks
* - Watchs for file changes for images, scripts and sass/css
*
**/
gulp.task('default', ['build', 'browser-sync'], function () {
  gulp.watch('src/assets/css/**/*.scss', ['sass']);
  gulp.watch('src/**/*.js', ['scripts']);
  gulp.watch('src/assets/images/*', ['images']);
  gulp.watch('src/**/*.html', ['copy']);
});




// gulp.task('prod', ['sass', 'scripts', 'images'], function () {

// });
