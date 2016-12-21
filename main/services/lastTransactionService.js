clearbank.service('lastTransactionService',function($http){
	return{
            getTransactionData:function(accNumber,accountType,customerId,token, callback){
                console.log('token ',token);
			$http({
	            method:"POST",
				url:"http://10.80.190.161:9090/clearbank-1.0/transaction",   
                data:{
                    "accountnumber": accNumber,
					"accounttype":accountType
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

