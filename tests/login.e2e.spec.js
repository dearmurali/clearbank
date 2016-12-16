describe('The ClearBank website', () => {
  var self = this;
    beforeAll(() => {
        var button = element(by.buttonText('Login'));
        button.click();

    });
    beforeEach(() => {
      browser.sleep(2000);
        this.customerId = element(by.model('$ctrl.customer_id'));
        this.password = element(by.model('$ctrl.pwd'));
        this.submit = element(by.css('[data-ng-click="$ctrl.onLogin()"]'));
    });
    
    it('should show error in login', () => {
        
        self.customerId.sendKeys('123wew4567890');
        self.password.sendKeys('Mi23');
        self.submit.click(); 
        expect(browser.getCurrentUrl()).not.toEqual("http://localhost:3000/dashboard");
        browser.sleep(2000);
    });

    it('should show error in login field', () => {
        self.customerId.clear();
        self.password.clear();
        self.customerId.sendKeys('1234erw560');
        self.password.sendKeys('Mindtree@123');
        self.submit.click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/login");
        browser.sleep(2000);
    });
    
    it('should show error in password field', () => {
        self.customerId.clear();
        self.password.clear();
        self.customerId.sendKeys('1234567890');
        self.password.sendKeys('Mindtre3');
        self.submit.click();
        expect(browser.getCurrentUrl()).not.toEqual("http://localhost:3000/dashboard");
        browser.sleep(2000);
    });
    
    it('should  go to dashobard', () => {
        self.customerId.clear();
        self.password.clear();
        self.customerId.sendKeys('1234567890');
        self.password.sendKeys('A!!day10ng');
        self.submit.click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/dashboard");
        browser.sleep(2000);
    });

});
