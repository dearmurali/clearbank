clearbank.service('dashboardService', function ($http, $cookies) {
    return {
        getData: function (customer_id, callback) {
            //console.log(customer_id, password, callback);
            $http({
                method: "get",
                url: "http://localhost:3000/assets/data.json"
            }).then(
                //success
                function (result) {
                    console.log('dashboard datsd', result.data.customerData);
                    for (i = 0; i < result.data.customerData.length; i++) {
                        //console.log('inside for');
                        if (customer_id === result.data.customerData[i].csId) {

                            $cookies.put('customerName', result.data.customerData[i].customerName);
                            $cookies.put('customerNumber', result.data.customerData[i].accountInfo[0].accountNumber);
                            $cookies.put('customerBalance', result.data.customerData[i].accountInfo[0].accountBalance);
                            $cookies.put('currency', result.data.customerData[i].accountInfo[0].currency);
                            callback(result.data.customerData[i].accountInfo);
                        }
                    }

                },
                //error
                function (err) {
                    console.log('some error occurred');
                }
            )
        }

    }
});
