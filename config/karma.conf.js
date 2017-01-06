	module.exports=function(config){
	config.set({
		basePath:'../',
		
		frameworks:['jasmine'],
		
		browsers:['Chrome'],
		
		files:[
			'bower_components/jquery/dist/jquery.js',
			'bower_components/angular/angular.js',
			'bower_components/angular-route/angular-route.js',
			'bower_components/angular-messages/angular-messages.js',
			'bower_components/angular-animate/angular-animate.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/angular-messages/angular-messages.js',
            'bower_components/angular-aria/angular-aria.js',
            'bower_components/angular-material/angular-material.js',
			'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-cookies/angular-cookies.js',
			'bower_components/bootstrap/dist/js/bootstrap.js',
			'main/app.module.js',
            'main/app.route.js',
//			'main/services/login.js',
//			'main/controllers/login.js',
//            'main/controllers/forgotPassword.js',
            'main/components/registrationComponent.js',
            'main/services/registration.service.js',
//			"tests/forgotPassword.test.js",
			"tests/registration.test.js"
		],
		
		reporters:['progress', 'junit'],
		
		htmlReporter:{
			outputFile:'tests/test_results.html',
			pageTitle: 'ClearBank',
			subPageTitle: 'Unit Tests Results',
			groupSuites: true,
			useCompactStyle: true,
			useLegacyStyle: true
		},
		
		junitReporter:{
			outputFile: 'tests/junit_test_results.xml',
			suite:''
		}
	});
};