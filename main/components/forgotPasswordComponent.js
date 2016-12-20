clearbank.component('forgotPassword', {
    transclude: true,
    templateUrl: 'main/partials/forgotPassword.html',
    controller: function forgotPasswordController(ForgotPasswordService) {
        var self = this;
        self.forgotPasswordWidget=true;
       self.checkNumber=true;
	self.changeSubmit=function()
	{	if(self.mobileNumber===undefined)
    {
     self.checkMobile=false;
    }
        
		 if(self.changePassword!=self.confirmPassword || self.changePassword===undefined || self.confirmPassword===undefined)
		 {
			self.No_match=true;
		 }
		 else if(self.changePassword===self.confirmPassword)
		 {
             ForgotPasswordService.resetPassword(self.mobileNumber,self.changePassword,function(result){
             self.No_match=false;
			 self.forgotPasswordWidget=false;
			 self.changeSuccessWidget=true;
             
             })
         }
	}
    
    self.checkMobile=function(mobileNumber){
        console.log(mobileNumber);
         ForgotPasswordService.validateMobileNumber(mobileNumber,function(result){
            
        if(result.data.success===false)
        {
             self.checkNumber=false;
            
        }
          
             if(result.data.success)
             {
                 console.log(self.checkNumber);
              self.checkNumber=true;
                 console.log(self.checkNumber);
             }
             
        });
        }

}
});
