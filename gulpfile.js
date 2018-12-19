// Gulp
const gulp = require("gulp");

// Local server
const browserSync = require("browser-sync").create();

// CSS
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer");
const csscomb = require("gulp-csscomb");
const sass = require("gulp-sass");

// HTML minify
const htmlmin = require("gulp-htmlmin");

// --------------------------------------------------------------------
// Tasks
// --------------------------------------------------------------------

// Local Server + Watch
gulp.task("server", ["sass", "html"], () => {
  browserSync.init({
    server: "./docs/",
    cors: true
  });

  gulp.watch("./src/*.scss", ["sass"]);
  gulp.watch("./src/*.html", ["html"]);
});

// HTML minify
gulp.task("html", () => {
  gulp
    .src("./src/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true
      })
    )
    .pipe(gulp.dest("./docs"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

// Compile sass into CSS & Auto-inject into browsers
gulp.task("sass", () =>
  gulp
  .src("./src/*.scss")

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

  .pipe(
    browserSync.reload({
      stream: true
    })
  )
);

gulp.task("default", ["server"]);