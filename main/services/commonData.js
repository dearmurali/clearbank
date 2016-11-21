clearbank.service('CommonData',function(){
	return{
		getData:function(){
			return CustomerData = [{
				csId: "1234567890",
				phn: "0000000001",
				pwd: "Mindtree@123"
			}];
		},
		
		setData:function(data){
			CustomerData.push(data);
		}
	}
})