angular.module("ClearBank")

.directive('commonMobileLogo',function(){
    return{
        transclude: true,
        restrict:'AE',
        templateUrl:'views/commonMobileLogo.html'
}
});