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

                    console.log(result.data);
					console.log("result on login",result.config.data.username);

						if(result.data.success){
                            console.log("conos");
							callback('success');
//                            console.log('customerName',result.data.customerData[0].customerName);
//                            console.log('customerId',result.data.customerData[0].csId);
//                            console.log('customerMail',result.data.customerData[0].email);
//                           console.log('customerMobile',result.data.customerData[0].custMobile); console.log('accountInfo',JSON.stringify(result.data.customerData[0].accountInfo))
                           localStorage.setItem('customerName', result.data.customer_information.customer_Name);
                            console.log(result.data.customer_information.customer_Name);
                           localStorage.setItem('customerId', result.data.customer_information.customer_Id);
                           localStorage.setItem('customerMail', result.data.customer_information.customer_email);
                           localStorage.setItem('customerMobile',result.data.customer_information.customer_mobileNumber);
                            localStorage.setItem('accountNumber', result.data.customer_information.accounts_information.accounts[0].account_number);
                             localStorage.setItem('accountType', result.data.customer_information.accounts_information.accounts[0].account_type);
                            localStorage.setItem('accountBalance', result.data.customer_information.accounts_information.accounts[0].available_balance);
                            localStorage.setItem('currency', result.data.customer_information.accounts_information.accounts[0].currency);
                           localStorage.setItem('accountInfo', JSON.stringify(result.data.customer_information.accounts_information.accounts));
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
