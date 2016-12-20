clearbank.service('lastTransactionService',function($http){
	return{
//		getData:function(index,accId, callback){
//			//console.log(customer_id, password, callback);
//			$http({
//				method:"get",
//				url:"http://localhost:3000/assets/data.json"
//			}).then(
//				//success
//				function(result){
//					for(i=0;i<result.data.customerData.length;i++){
//						//console.log('inside for');
//						if(accId=== result.data.customerData[i].csId){
//				     callback(result.data.customerData[i].accountInfo[index]);	
//						}
//					}
//					
//				},
//				//error
//				function(err){
//					console.log('some error occurred');
//				}
//			)
//		},
//        
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
        
        
        
//        getTransactionData:function(index,accId, callback){
//			console.log(index+" "+accId);
//			$http({
//				method:"get",
//				url:"http://localhost:3000/assets/transactionData.json"
//			}).then(
//				//success
//				function(result){
//                    console.log('inside last transaction service');
//					for(i=0;i<result.data.transactionData.length;i++){
//						//console.log('inside for');
//						if(accId=== result.data.transactionData[i].csId){
//				     callback(result.data.transactionData[i].accountInfo[index].transactions);	
//						}
//					}
//					
//				},
//				//error
//				function(err){
//					console.log('some error occurred');
//				}
//			)
//		}
		
	}
});

