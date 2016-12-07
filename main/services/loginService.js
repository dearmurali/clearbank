clearbank.service('LoginService',function($http,$cookies){
	return{
		validLogin:function(customer_id, password, callback){
			$http({
				method:"POST",
				url:"http://10.80.190.161:8080/clearbank/auth",
				data:{
					"username": customer_id,
					"password": password
				}
			}).then(
				function(result){
					console.log("result on login",result.config.data.username);
						if(result.data.success){
							callback('success');
                           $cookies.put('customerId',result.config.data.username);
                            
                        }                   
                        
						else
							callback('false');
				},
				function(err){
					console.log('some error occurred');
				}
			)
		},
		
		resetPassword:function(data){
			CustomerData.push(data);
		},
		
		registerUser:function(data){
			CustomerData.push(data);
		}
	}
});

