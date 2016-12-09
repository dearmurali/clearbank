angular.module('ClearBank')

.config(['$translateProvider',function($translateProvider){
    $translateProvider.translations('en',{
        'customerid' : 'Customer Id',
        'password' : 'Password',
        'musthave10digits': 'Must have 10 digits',
        'register': 'Register',
        'register here': 'Register Here',
        'login': 'Login',
        'cancel':'Cancel',
        'submit':'Submit',
        
        'typeyourcustomerid' : 'Type Your Customer Id',
        'typeyourpassword' : 'Type Your Password',
        'invalididandorpassword' : 'Invalid Id and/or Password',
        'forgotpassword':'Forgot password',
        'note':'Note',
        'indicatesmandatoryfields':'indicates mandatory fields',
        
        'change password':'CHANGE PASSWORD',
        'enter mobile number':'ENTER MOBILE NUMBER',
        'enter registered mobile number':'Enter registered mobile number',
        'please enter a valid mobile number':'Please enter a valid mobile number',
        'mobile number is not registered':'Mobile number is not registered',
        
        'reset password':'RESET PASSWORD',
        'confirm password:':'CONFIRM PASSWORD',
        'new password':'New Password',
        'confirm new password':'Confirm New password',
        
        "whats your name" : "What's your name",
        "please enter alphabets only" : "Please enter alphabets only",
        "enter name" : "Enter name",
        "we need your name to talk to you" : "We need your name to talk to you",
        "and your customer id" : "and your customer id",
        "please enter a valid 10 digit account id" : "Please enter a valid 10 digit account id",
        "dont leave this empty" : "Don't leave this empty",
        "enter account number" : "Enter account number",
        "well never share your account info with anyone else" : "We'll never share your account info with anyone else",
        "contact number" : "contact number",
        "enter phone number" : "Enter phone number",
        "please enter a valid 10 digit contact number" : "Please enter a valid 10 digit contact number",
        "dont leave this empty" : "Don't leave this empty",
        "an email address to contact you" : "an e-mail address to contact you",
        "enter email" : "Enter email",
        "please enter a valid email address" : "Please enter a valid email address",
        "well never share your email with anyone else" : "We'll never share your email with anyone else",
        "set a password for this account" : "Set a Password for this account",
        "please enter a valid password" : "Please enter a valid password",
        "secure your account with a password" : "secure your account with a password (8-20 alphanumeric and special characters)",
        "and reenter to confirm" : "and re-enter to confirm",
        "please enter a valid password" : "Please enter a valid password",
        "enter same password as above" : "Enter same password as above",
        "passwords do not match" : "Passwords do not match"
        
    });
    
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');
}]);