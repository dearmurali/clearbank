angular.module("ClearBank")

.directive('bankLinks',function(){
    return{
        transclude: true,
        restrict:'AE',
        templateUrl:'views/bankLinks.html'
}
});