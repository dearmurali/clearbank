clearbank.service('LoginService',function($http){
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
					console.log(result);
						if(result.data.success)
							callback('success');
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


clearbank.service('dashboardService',function($http){
	return{
		getData:function(customer_id, callback){
			$http({
				method:"POST",
				url:"http://10.80.190.161:8080/clearbank/auth"
			}).then(
				function(result){
					console.log(result.data.customerData);
					for(i=0;i<result.data.customerData.length;i++){
						console.log(result.data.customerData[i].csId+"customer id");
					
						if("1234567890" === result.data.customerData[i].csId){
							callback(result.data.customerData[i].accountInfo);
							console.log(result.data.customerData[i].accountInfo);
						}
					}
					
				},
				function(err){
					console.log('some error occurred');
				}
			)
		}
		
	}
});