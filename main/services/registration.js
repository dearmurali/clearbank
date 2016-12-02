clearbank.service('RegistrationService',function($http){
	return{
		RegisterCustomer:function(customer_name, customer_id, customer_mobile, customer_email, customer_password, callback){
			$http({
				method:"POST",
				url:"http://10.80.190.161:8080/clearbank/register",
				data:{
				  "customerid": customer_id,
				  "password": customer_password,
				  "customername": customer_name,
				  "customermobile": customer_mobile,
				  "customeremail": customer_email
				}
			}).then(
				function(result){
					console.log('successfully resistered ', result);
					callback('successfully registered');
				},
				function(err){
					console.log('some error occurred ',err);
					callback('not registered');
				}
			)
		}
	}
});

