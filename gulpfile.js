var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function (done) {
	console.log("running browser-sync.......");
	browserSync.init({
		server: {
			baseDir: "./",
		},
		browser: ["chrome.exe", "firefox", "iexplore", "microsoft-edge:"],
		ghostMode: {
			clicks: true,
			forms: true,
			scroll: true
		}
	});
	done();
	console.log("press ctrl+c to stop........");
}); //end of browser-sync

gulp.task('default',['browser-sync'],function(){
	console.log("running default.......");
})
