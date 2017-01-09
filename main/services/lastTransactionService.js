clearbank.service('lastTransactionService',function($http){
	return{

        
        getTransactionData:function(index,accId, callback){
			console.log(index+" "+accId);
			$http({
				method:"get",
				url:"http://localhost:3000/assets/transactionData.json"
			}).then(
				//success
				function(result){
//                    console.log('inside last transaction service');
//                    console.log(result.data);
					for(i=0;i<result.data.transactionData.length;i++){
						//console.log('inside for');
						if(accId=== result.data.transactionData[i].csId){
				     callback(result.data.transactionData[i].accountInfo[index].transactions);	
//                            console.log("result.data.transactionData[i].accountInfo[index].transactions");
						}
					}
					
				},
				//error
				function(err){
//					console.log('some error occurred');
					callback("some error occured "+err);
				}
			)
		}
		
	}
});

