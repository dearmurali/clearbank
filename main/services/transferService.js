clearbank.service('transferService',function($http){
	return{
         
//        transferAmount:function(index,accId, callback){
//			console.log(index+" "+accId);
//			$http({
//				method:"POST",
//				url:"http://localhost:3000/assets/data/transactionData.json",
//                data:{
//                }
//			}).then(
//				//success
//				function(result){
//                    console.log('inside transfer service');
//                    console.log(result.data)
//				     callback(result.data);	   	
//				},
//                //error
//				function(err){
//					console.log('some error occurred');
//				}
//			)
//		}
        
     getPayeedata:function(csId, callback){
			
			$http({
				method:"GET",
				url:"http://localhost:3000/assets/data/payeeData.json",
//                data:{"customer_id":csId,
//                      "transfer_type":transferType
//                }
			}).then(
				//success
				function(result){
//                    console.log('inside transfer service');
//                    console.log(result.data);
                    for(i=0;i<result.data.payeeData.length;i++){
                    if(result.data.payeeData[i].csId===csId){
//                         console.log(result.data.payeeData[i].payee);
                    callback(result.data.payeeData[i].payee);
                    }
                        }  
				},
                //error
				function(err){
//					console.log('some error occurred');
					callback('some error occurred'+err);
				}
			)
		}
		
	}
});

