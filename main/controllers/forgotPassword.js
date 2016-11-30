clearbank.controller("forgotPasswordController",['$scope', function($scope){

	//function to confirm change password submission
	$scope.forgotPasswordWidget=true;
	$scope.changeSubmit=function()
	{		
		 if($scope.changePassword!=$scope.confirmPassword)
		 {
			$scope.No_match=true;
		 }
		 else if($scope.changePassword===$scope.confirmPassword)
		 {
			 $scope.No_match=false;
			 $scope.forgotPasswordWidget=false;
			 $scope.changeSuccessWidget=true;
		 }
		 
		/* for(i=0;i<CommonData.getData().length;i++)
			{
			if($scope.nums==CommonData.getData()[i].phn)
			{
		        $scope.students.splice(i, 0,
					{
						pwd: $scope.changePassword
					}
				)
				window.location.href="/";
			}
		    }*/
	}
}]);
