clearbank.service("payeeListService",function($http){
return{
getPayeeData:function(callback){
$http({
method:"GET",
    url:"http://localhost:3000/assets/payeeDetails.json"
})
.then(
function(result){
    console.log("inside service")
    callback(result.data);
  //  console.log(result.data);
},
    function(err){
    console.log("Error")
    }
    )

}
}
})