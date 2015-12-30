//	Include gulp
var gulp = require('gulp'),
// Include Plugins
	stylus = require('gulp-stylus'),
	jade = require('gulp-jade'),
	concat = require('gulp-concat'),
	minifyCss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	connect = require('gulp-connect');


// Compile Stylus
gulp.task('styles', function(){
	return gulp.src('assets/css/main.styl')
		.pipe(stylus())
		.pipe(gulp.dest('assets/css'))
		.pipe(connect.reload())
});

// Concatenate & Minify JS
gulp.task('scripts', function(){
	return gulp.src('assets/js/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('assets/js'))
		.pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'))
		.pipe(connect.reload())
});

// Compile Jade
gulp.task('templates', function() {
  return gulp.src('views/index.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload())
});

// Watch Files For Changes
gulp.task('watch', function(){
	// Watching Javascript Files
	gulp.watch('assets/js/*.js',['scripts']);
	// Watching Stylus Files
	gulp.watch([
		'assets/css/main.styl',
		'assets/css/_1tools/*.styl',
		'assets/css/_2basics/*.styl',
		'assets/css/_3modules/*.css',
		'assets/css/_4pages/*.styl'
		],['styles']);
	// Watching Jade Files
	gulp.watch([
		'views/index.jade',
		'views/layout/*.jade',
		'views/partials/*.jade'
		],['templates']);
});

// Connect to webserver with livereload
gulp.task('connect', function(){
	return connect.server({
		//Update this to the current host 'localhost'
		host: 'gdevtech.local',
		port: 6565,
		livereload: true
	});
});

// Default Task
gulp.task('default', ['styles', 'scripts', 'templates', 'watch', 'connect']);

// Watch and Connect task only
gulp.task('startup', ['watch', 'connect']);