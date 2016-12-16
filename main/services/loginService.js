clearbank.service('LoginService',function($http,$cookies){
	return{
		validLogin:function(customer_id, password, callback){
			$http({
				method:"POST",
				url:"http://10.80.190.161:8080/clearbank-1.0/auth",
				data:{
					"username": customer_id,
					"password": password
				}
			}).then(
				function(result){

                    console.log(result.data.success);
					console.log("result on login",result.config.data.username);

						if(result.data.success){
                            console.log("conos");
							callback('success');
//                            console.log('customerName',result.data.customerData[0].customerName);
//                            console.log('customerId',result.data.customerData[0].csId);
//                            console.log('customerMail',result.data.customerData[0].email);
//                           console.log('customerMobile',result.data.customerData[0].custMobile); console.log('accountInfo',JSON.stringify(result.data.customerData[0].accountInfo))
//                           localStorage.setItem('customerName', result.data.customerData[0].customerName);
//                           localStorage.setItem('customerId', result.data.customerData[0].csId);
//                           localStorage.setItem('customerMail', result.data.customerData[0].email);
//                           localStorage.setItem('customerMobile', result.data.customerData[0].custMobile);
//                            localStorage.setItem('accountNumber', result.data.customerData[0].accountInfo[0].accountnumber);
//                            localStorage.setItem('accountBalance', result.data.customerData[0].accountInfo[0].accountbalance);
//                            localStorage.setItem('currency', result.data.customerData[0].accountInfo[0].currency);
//                           localStorage.setItem('accountInfo', JSON.stringify(result.data.customerData[0].accountInfo));
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
