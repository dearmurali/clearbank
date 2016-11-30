describe('The ClearBank website', () => {
  var self = this;
    beforeAll(() => {
        browser.get('http://localhost:3000/');
        var button = element(by.buttonText('Login'));
        button.click();

    });
    beforeEach(() => {
      
        this.customerId = element(by.model('customer_id'));
        this.password = element(by.model('pwd'));
        this.submit = element(by.css('[data-ng-click="onLogin()"]'));
    });
    
    it('should show error in login', () => {
        
        self.customerId.sendKeys('123wew4567890');
        self.password.sendKeys('Mi23');
        self.submit.click(); 
        browser.sleep(5000);
    });

    it('should show error in login field', () => {
        self.customerId.clear();
        self.password.clear();
        self.customerId.sendKeys('1234erw567890');
        self.password.sendKeys('Mindtree@123');
        self.submit.click();
        browser.sleep(5000);
    });
    
    it('should show error in password field', () => {
        self.customerId.clear();
        self.password.clear();
        self.customerId.sendKeys('1234567890');
        self.password.sendKeys('Mindtre3');
        self.submit.click();
        browser.sleep(5000);
    });
    
    it('should  go to dashobard', () => {
        self.customerId.clear();
        self.password.clear();
        self.customerId.sendKeys('1234567890');
        self.password.sendKeys('Mindtree@123');
        self.submit.click();
        browser.sleep(5000);
    });

});
