var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');

gulp.task('css', function () {
	return gulp.src('./src/scss/**/*.scss')
        .pipe(postcss([ autoprefixer({browsers: "last 3 versions"}) ]))
        .pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('default', gulp.series('css'));