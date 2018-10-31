// Gulp
const gulp = require("gulp");

// CSS
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer");
const csscomb = require("gulp-csscomb");
const sass = require("gulp-sass");

// --------------------------------------------------------------------
// Tasks
// --------------------------------------------------------------------

gulp.task("watch", ["sass"], () => {
  gulp.watch("src/*.scss", ["sass"]);
});

// Compile sass into CSS & Auto-inject into browsers
gulp.task("sass", () =>
  gulp
    .src("src/*.scss")

    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      })
    )

    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )

    .pipe(csscomb())

    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )

    .pipe(gulp.dest("./docs"))
);

gulp.task("default", ["watch"]);
