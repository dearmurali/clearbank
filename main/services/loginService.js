
clearbank.service('LoginService',function($http,$cookies){
	return{
		validLogin:function(customer_id, password, callback){
			//console.log(customer_id, password, callback);
			$http({
				method:"get",
				url:"http://localhost:3000/assets/data.json"
			}).then(
				//success
				function(result){
					//console.log(result);
					//validate customer
					var i, valid = false;
					
					for(i=0;i<result.data.customerData.length;i++){
						//console.log('inside for');
						if(customer_id === result.data.customerData[i].csId && password === result.data.customerData[i].pwd){
							console.log('inside if');
							valid = true;
							callback('success');
                            $cookies.put('customerId',customer_id);
							$cookies.put('customerName',result.data.customerData[i].customerName);
                            $cookies.put('customerNumber',result.data.customerData[i].accountInfo[0].accountNumber);
                            $cookies.put('customerBalance',result.data.customerData[i].accountInfo[0].accountBalance);
                            $cookies.put('currency',result.data.customerData[i].accountInfo[0].currency);
						}
					}
					if(valid === false){
						callback('false');
					}
				},
				//error
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
