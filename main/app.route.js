clearbank.config(function ($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
        })

    .state('login', {
        url: '/login',
        templateUrl: 'views/login/login.html'
    })

    .state('register', {
        url: '/register',
        templateUrl: 'views/registration.html'
    })

    .state('forgotpassword', {
        url: '/forgotpassword',
        templateUrl: 'views/forgotPassword.html',
    })

    .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardController',

    })

    .state('lastTransactions', {
        url: '/lastTransactions',
        templateUrl: 'views/lastTransactions.html',
        controller: 'lastTransactionController'
    })


    .state('transfers', {
        url: '/transfers',
        templateUrl: 'views/transfers.html',
        controller: 'transfersController'
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
