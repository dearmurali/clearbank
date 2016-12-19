clearbank.service('lastTransactionService',function($http){
	return{
          getTransactionData:function(accId,accNumber, callback){
			console.log(accId);
			$http({
				method:"get",
				url:"http://10.80.190.161:9090/clearbank-1.0/transaction",
                data:{
					"accountnumber": accNumber,
					"customerId": accId
				}
			}).then(
				//success
				function(result){
                    console.log('inside last transaction service',result.data);
					for(i=0;i<result.data.transactionData.length;i++){
						//console.log('inside for');
						if(accId=== result.data.transactionData[i].csId){
				     callback(result.data.transactionData);	
						}
					}
					
				},
				//error
				function(err){
					console.log('some error occurred');
				}
			)
		}

	}
});

