clearbank.controller('topMenu',['$scope','$cookies', function($scope){
      
    $scope.selectedMenu=function(index){
    sessionStorage.putItem('selectedIndex',index);
   
        $(document).ready(function(){
    $("."+index).click(function(){
        $(this).css("background-color","red");
    });
   
});
    
    
    
    }

	}
]);