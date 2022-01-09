// We need to import a few things fromt tthe gulp package
const { src, dest, watch, series } = require('gulp')
//import the gulp-sass plugin that was installed
const sass = require('gulp-sass')(require('sass'))

//create a function that will be responsible for compiling the sass code into css

function buildStyles() {
    return src('*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

//watch function

function watchTask() {
    watch(['*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)