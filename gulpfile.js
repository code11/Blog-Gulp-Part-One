/**
 * Created by marin on 3/24/2015.
 */
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require("gulp-concat"),
	mainBowerFiles = require("main-bower-files"),
	minifyHtml = require("gulp-minify-html"),
	rename = require("gulp-rename"),
	webserver = require("gulp-webserver"),
	path = require('path');

var base = "src/**/",
	dest = "build/",
	lib = dest + 'lib/',
	destJs = dest + 'js/';

gulp.task('print', function () {
	console.log("Print me before the default task");
});

gulp.task('concat-uglify-js', function () {
	return gulp
		.src(base + "*.js")
		.pipe(concat('app.js'))
		.pipe(gulp.dest(destJs))
		.pipe(rename('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(destJs));
});

gulp.task('html', function(){
	return gulp
		.src([base + 'www/**/*'], {base: 'src/'})
		.pipe(minifyHtml({ empty: true }))
		.pipe(rename(function(p){
			var feature = p.dirname.split(/\\|\//)[0],
				newDir = p.dirname.replace(path.join(feature, "www"), "");
			p.dirname = newDir;
		}))
		.pipe(gulp.dest(dest));
});

gulp.task("watch-js", function(){
	gulp.watch(base + "*.js", ["concat-uglify-js"]).on('change', function(event){
		console.log('File ' + event.path + ' was ' + event.type + ', running task concat-uglify-js');
	});
});

gulp.task("watch-html", function(){
	gulp.watch([base + "www/**/*.html"], ['html']).on("change", function(event){
		console.log('File ' + event.path + ' was ' + event.type + ', running task html');
	});
});

gulp.task("install", function () {
	return gulp
		.src(mainBowerFiles({ includeDev: false }), { base: 'bower_components/' })
		.pipe(gulp.dest(lib));
});


gulp.task('webserver', function () {
	return gulp
		.src(['build/'])
		.pipe(webserver({
			port: 3002,
			livereload: true,
			open: "http://localhost:3002",
			fallback: 'index.html'
		}));
});


gulp.task("watch", ["watch-js", "watch-html"]);
gulp.task("compile", ["html", "concat-uglify-js"]);
gulp.task("default", ["watch", "compile", "webserver"]);