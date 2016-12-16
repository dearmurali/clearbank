clearbank.service('ForgotPasswordService',function($http){
	return{
		validateMobileNumber:function(mobile_number, callback){
			console.log('mobile_number ',mobile_number);
			$http({
					method:"POST",
					url:"http://10.80.190.161:8080/clearbank/validate/mobile",
					data:{
						"customermobile": mobile_number
					}
			})
			.then(
				function(result){
					console.log('success ',result);
					callback(result);
				},
				function(err){
					console.log('error ',err);
					callback(err);
				}
			)
		},
		
		resetPassword:function(mobile, password, callback){
		$http({
            method:"POST",
            url:"http://10.80.190.161:8080/clearbank/resetpassword",
            data:{
            "customermobile":mobile,
            "password": password
            }
		})
        .then(
				function(result){
					console.log('success ',result);
					callback(result);
				},
				function(err){
					console.log('error ',err);
					callback(err);
				}
			)
		}
	
}
});

