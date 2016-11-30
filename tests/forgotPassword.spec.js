describe('The clearBank website', () => {
    var self = this;
    beforeAll(() => {
        browser.get('http://localhost:3000/');
        var button = element(by.buttonText('Login'));
        button.click();
        this.customerId = element(by.model('customer_id'));
        this.password = element(by.model('pwd'));
        this.submit = element(by.css('[data-ng-click="onLogin()"]'));
       
    });
    
    it('should go to dashboard',() => {
        self.customerId.sendKeys('1234567890');
        self.password.sendKeys('Mindtree@123');
        self.submit.click();
        browser.sleep(5000);
    })
    
    it('should show account transactions for a selected account',() => {
        var account=element(by.repeater);
        account.click();
        browser.sleep(5000);
    })
});
