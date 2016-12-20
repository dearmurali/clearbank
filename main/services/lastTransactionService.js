clearbank.service('lastTransactionService',function($http){
	return{
            getTransactionData:function(accNumber,accountType,customerId,token, callback){
			$http({
	            method:"GET",
				url:"http://10.80.190.161:9090/clearbank-1.0/transaction",
                data:{
					"account_number": accNumber,
					"account_type":accountType,
                    "customer_Id": customerId,
                    "token":token
				}
			}).then(
				//success
				function(result){
                    console.log('inside last transaction service',result);
				
				     callback(result);	
						
					},
				//error
				function(err){
					console.log('some error occurred');
				}
			)
		}

	}
});

