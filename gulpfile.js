var gulp = require("gulp");
var nodemon = require("nodemon");
var browserSync = require("browser-sync");
var jade = require("gulp-jade");
var sass = require("gulp-sass");
//liveload
gulp.task("liveload", ["compile-sass", "compile-jade", "run"], function() {
    browserSync.init({
        proxy: "localhost:6666",
        files: ["./client/**/*.*"],
        browser: ["google chorme"],
        port: "9876"
    });
    gulp.watch("./src/sass/*.scss", ["compile-sass"]);
    gulp.watch("./src/jade/*.jade", ["compile-jade"]);

});



gulp.task("compile-jade", function() {
    gulp.src("./src/jade/*.jade")
        .pipe(jade())
        .pipe(gulp.dest("./client/"))
});

gulp.task("compile-sass", function() {
    return gulp.src("./src/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./client/css/"))
});


gulp.task("run", function(cb) {
    var started = false;
    return nodemon({
        script: 'server.js'
    }).on('start', function() {
        // to avoid nodemon being started multiple times
        if (!started) {
            cb();
            started = true;
        }
    });
});
