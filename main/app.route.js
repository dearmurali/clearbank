clearbank.config(function ($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
        })
    

    .state('loginmobile', {
        url: '/loginmobile',
        templateUrl:'main/partials/loginMobile.html'
        })
    
    .state('forgotPasswordMobile',{
        url:'/forgotPasswordMobile',
        templateUrl:'main/partials/forgotPasswordMobile.html'
    })
    .state('registerMobile',{
        url:'/registerMobile',
        templateUrl:'main/partials/registerMobile.html'
    })

//    .state('register', {
//        url: '/register',
//        templateUrl: 'views/registration.html'
//    })

    .state('forgotpassword', {
        url: '/forgotpassword',
        templateUrl: 'views/forgotPassword.html',
    })

    .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html'

    })

    .state('lastTransactions', {
        url: '/lastTransactions',
        templateUrl: 'views/lastTransactions.html'     
    })


    .state('transfers', {
        url: '/transfers',
        templateUrl: 'views/transfers.html'
    })

    .state('mutualfunds', {
        url: '/mutualfunds',
        templateUrl: 'views/mutualFunds.html'
    })

    .state('contactus', {
        url: '/contactus',
        templateUrl: 'views/contactUs.html'
    })

    .state('cards', {
        url: '/cards',
        templateUrl: 'views/cards.html'
    })
	
	 .state('mycards', {
        url: '/mycards',
        templateUrl: 'views/userCards.html'
    })
	

    .state('managepayee', {
        url: '/managepayee',
        templateUrl: 'views/managePayee.html',
        controller: 'managePayee'
    })

    .state('profile', {
        url: '/myprofile',
        templateUrl: 'views/editProfile.html',
        
    })
    
    .state('addpayee',{
    url:'/addpayee',
        templateUrl:'views/addPayee.html'
    })
    
    .state('payeelist',{
    url:'/payeelist',
        templateUrl:"views/payeelist.html"
    })
    .state('editpayee',{
    url:'/editpayee',
        templateUrl:"views/editPayee.html"
    })
    

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });

    //	$locationProvider.html5Mode({
    //		enabled: true,
    //		requireBase: false
    //	});

    //      $locationProvider.html5Mode(false);
    //    $locationProvider.hashPrefix('!');

});
