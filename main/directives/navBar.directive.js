angular.module("ClearBank")

.directive('navBar',function(){
    return{
        transclude: true,
        restrict:'AE',
        templateUrl:'views/navBar.html'
}
});