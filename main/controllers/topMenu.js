clearbank.controller('topMenu',['$scope','$cookies', function($scope,$cookies){
      
    $scope.selectedMenu=function(index){
    $cookies.put('selectedIndex',index);
   
        $(document).ready(function(){
    $("."+index).click(function(){
        $(this).css("background-color","red");
    });
   
});
    
    
    
    }

	}
]);