describe('The clearBank website', () => {
    var self = this;
    beforeAll(() => {
        browser.get('http://localhost:3000/');
        var button = element(by.buttonText('Login'));
        button.click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/login");
        this.customerId = element(by.model('customer_id'));
        this.password = element(by.model('pwd'));
        this.submit = element(by.css('[data-ng-click="onLogin()"]'));

    });

    it('should go to dashboard', () => {
        self.customerId.sendKeys('1234567890');
        self.password.sendKeys('Mindtree@123');
        self.submit.click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/dashboard");
        browser.sleep(5000);
    });

    it('should show account transactions for a selected account', () => {
        self.account = element(by.binding('account.accountNumber'));
        self.account.click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/lastTransactions");
        browser.sleep(5000);
    });

    it('should show the same account number as clicked', () => {
        var heading = element(by.tagName('h4')).getText();
        var account = element(by.binding('account.accountNumber'));
        expect(heading).toEqual('Account Details');
        expect(heading).toContain('Account');
        expect(account).toEqual(self.account);
    });

    it('should show exactly 10 transactions', () => {
       var transactions=element(by.css('a[ng-click="showTransaction()"]'));
        transactions.click();
        expect(element(by.css('div[ng-show="showTransactions"]')).isDisplayed()).toBe(true);
    });

});
