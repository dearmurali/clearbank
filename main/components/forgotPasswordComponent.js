clearbank.component('forgotPassword', {
    transclude: true,
    templateUrl: 'main/partials/forgotPassword.html',
    controller: function forgotPasswordController(ForgotPasswordService) {
        var self = this;
        self.forgotPasswordWidget=true;
	self.changeSubmit=function()
	{		
		 if(self.changePassword!=$scope.confirmPassword)
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
        console.log("oj");
         ForgotPasswordService.validateMobileNumber(mobileNumber,function(result){
        if(result.data.error)
        {
            self.forgotPassForm.nums.$valid=false;
            self.forgotPassForm.nums.$error.pattern=true;

           
        }
        });
        }

}
});
