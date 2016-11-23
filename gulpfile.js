var gulp=require('gulp');
var sass=require('gulp-sass');
var karmaServer=require('karma').Server;

gulp.task('default',['sass', 'karma'], function(){
	console.log("Task's running");
});

gulp.task('sass',function(){
	return gulp.src('./assets/sass/**/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('./assets/css'))
});

gulp.task('karma',function(){
	new Server({
		configFile: __dirname+'/karma.conf.js',
		singleRun:true,
		
	},done).Start();
});
