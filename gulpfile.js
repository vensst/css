const { series,watch,src,dest} = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename')
function lessTask() {
  return src('src/styles/index.less')
    .pipe(less())
      .pipe(concat('index.css'))
      .pipe(cssnano())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(rename({ //index.min.css
        suffix: '.min'
      }))
      .pipe(dest('lib'));
}
watch('src/styles/index.less',{ ignoreInitial: false },lessTask);
exports.default = lessTask
