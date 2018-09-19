var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync");

gulp.task("sass", function(){
    return gulp.src("src/sass/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({browsers: ["chrome > 0", "ie > 0", "firefox > 0"]}))
        .pipe(gulp.dest("src/css/"))
        .pipe(browserSync.stream({match:"**/*.css"}));
});

gulp.task("browser-sync", function(){
    browserSync.init({
        server: {baseDir: "./"}
    });
});

gulp.task("watch", ["browser-sync"], function(){
    gulp.watch("src/sass/*.scss", ["sass"]);
    gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("default", ["watch"]);