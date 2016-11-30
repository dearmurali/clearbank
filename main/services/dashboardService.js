clearbank.service('dashboardService',function($http){
	return{
		getData:function(customer_id, callback){
			//console.log(customer_id, password, callback);
			$http({
				method:"get",
				url:"http://localhost:3000/assets/data.json"
			}).then(
				//success
				function(result){
					console.log(result.data.customerData);
					for(i=0;i<result.data.customerData.length;i++){
						console.log(result.data.customerData[i].csId+"customer id");
						console.log(customer_id+"customer 4idsfgasddsd");
						//console.log('inside for');
						if("1234567890" === result.data.customerData[i].csId){
							callback(result.data.customerData[i].accountInfo);
							console.log(result.data.customerData[i].accountInfo);
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

