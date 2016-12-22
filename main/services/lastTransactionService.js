clearbank.service('lastTransactionService',function($http){
	return{
//            getTransactionData:function(accNumber,accountType,customerId,token, callback){
//			$http({
//				method:"POST",
//				url:"http://10.80.190.161:9090/clearbank-1.0/transaction",
//                data:{
//					"account_number": accNumber,
//					"account_type":accountType,
//                    "customer_Id": customerId,
//                    "token":token
//				}
//			}).then(
//				//success
//				function(result){
//                    console.log('inside last transaction service',result);
//				
//				     callback(result);	
//						
//					},
//				//error
//				function(err){
//					console.log('some error occurred');
//				}
//			)
//		}
//        
        
        
        getTransactionData:function(index,accId, callback){
			console.log(index+" "+accId);
			$http({
				method:"get",
				url:"http://localhost:3000/assets/transactionData.json"
//            getTransactionData:function(accNumber,accountType,customerId,token, callback){
//                console.log('token ',token);
//			$http({
//	            method:"POST",
//				url:"http://10.80.190.161:9090/clearbank-1.0/transaction",   
//                data:{
//                    "accountnumber": accNumber,
//					"accounttype":accountType
//                }

			}).then(
				//success
				function(result){
                    console.log('inside last transaction service');
                    console.log(result.data);
					for(i=0;i<result.data.transactionData.length;i++){
						//console.log('inside for');
						if(accId=== result.data.transactionData[i].csId){
				     callback(result.data.transactionData[i].accountInfo[index].transactions);	
                            console.log("result.data.transactionData[i].accountInfo[index].transactions");
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

