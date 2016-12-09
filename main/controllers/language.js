angular.module('ClearBank')

.controller('languageController',function($scope, $translate){
    $scope.changeLanguage=function(lang){
        $translate.use(lang);
    }
})