describe('The clearBank website', () => {
    var self = this;

    it('should show account transactions for a selected account', () => {
        self.account = element(by.binding('account.accountNumber'));
        self.account.click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/lastTransactions");
        browser.sleep(2000);
    });


    it('should show exactly 10 transactions', () => {
       var transactions=element(by.css('a[ng-click="showTransaction()"]'));
        transactions.click();
        expect(element(by.css('div[ng-show="showTransactions"]')).isDisplayed()).toBe(true);
        browser.sleep(2000);
    });

});
