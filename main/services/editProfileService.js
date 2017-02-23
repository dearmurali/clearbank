clearbank.service('editProfileService', function ($http) {
    return {
        UpdateProfile: function (customer_id, customer_mobile, customer_email, customer_address, token, callback) {
//            console.log("in service",token);
            $http({
                method: "POST",
                url: "http://10.80.190.161:8080/clearbank/modifyUser",
                data: {
                    "id": customer_id,
                    "customermobile": customer_mobile,
                    "customeremail": customer_email,
                    "customeraddress": customer_address
                },
                header: {
                    "Authorization": token
                }
            }).then(
                function (result) {
//                    console.log('successfully resistered ', result);
                    if (result.data.error === "undefined") {
                        callback('successfully updated');
                    } else {
                        callback("ERROR in updating: " + result.data.error)
                    }
                },
                function (err) {
//                    console.log('some error occurred ', err);
                    callback('not Updated');
                }
            )
        }
    }
});
