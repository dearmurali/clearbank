	module.exports=function(config){
	config.set({
		basePath:'../',
		
		frameworks:['jasmine'],
		
		browsers:['Chrome', 'Firefox', 'IE'],
		
		files:[
			'bower_components/angular/angular.js',
			'bower_components/angular-route/angular-route.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/angular-messages/angular-messages.js',
			'bower_components/angular-ui-router/release/angular-ui-router.js',
			
			'main/app.js',
			'main/services/login.js',
			'main/controllers/login.js',
			
			'tests/**/*.js'
		],
		
		reporters:['progress', 'html', 'junit'],
		
		htmlReporter:{
			outputFile:'tests/test_results.html',
			pageTitle: 'ClearBank',
			subPageTitle: 'Unit Tests Results',
			groupSuites: true,
			useCompactStyle: true,
			useLegacyStyle: true
		},
		
		junitReporter:{
			outputFile: '/tests/junit_test_results.xml',
			suite:''
		}
	});
};