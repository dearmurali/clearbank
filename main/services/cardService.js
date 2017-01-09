clearbank.service('cardService',function($http){
	return{
        
        getCard:function(cardType,callback){
			
			$http({
				method:"GET",
				url:"http://localhost:3000/assets/cards.json"
//                data:{"customer_id":csId,
//                      "transfer_type":transferType
//                }
			}).then(
				//success
				function(result){
//                    console.log('inside card service');
//                    console.log(result.data);
                    for(i=0;i<result.data.cardDetails.length;i++){
                    if(result.data.cardDetails[i].type===cardType){
//                         console.log(result.data.cardDetails[i].detail);
                    callback(result.data.cardDetails[i].detail);
                    }
                        }  
				},
                //error
				function(err){
					callback("some error occured "+err)
//					console.log('some error occurred');
				}
			)
		}
		
	}
});

