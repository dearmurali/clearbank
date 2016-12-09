describe('The clearBank website', () => {
    var self = this;
    beforeAll(() => {
        browser.get('http://localhost:3000/');
        browser.sleep(1000);
        var button = element(by.buttonText('Register'));
        button.click();
    });

    beforeEach(() => {
        this.customerName = element(by.model('customerName'));
        this.customerId = element(by.model('customerId'));
        this.customerContact = element(by.model('customerContact'));
        this.customerEmail = element(by.model('customerEmail'));
        this.customerPassword = element(by.model('customerPassword'));
        this.confirmedPassword = element(by.model('confirmedPassword'));
        this.submit = element(by.css('[data-ng-click="save()"]'));
    });


    it('should not register the user', () => {
        this.customerName.sendKeys('12Akash S234ngh');
        // browser.sleep(2000);
        this.customerId.sendKeys('2132133');

        //browser.sleep(2000);
        this.customerContact.sendKeys('67787678');

        //browser.sleep(2000);
        this.customerEmail.sendKeys('gfhdh.fyuy');

        //browser.sleep(2000);
        this.customerPassword.sendKeys('ertwertwrt');

        //browser.sleep(2000);
        this.confirmedPassword.sendKeys('456546456');

        //browser.sleep(2000);
        this.submit.click();
        expect(element(by.css('.contactError')).isDisplayed()).toBe(true);
        expect(element(by.css('.cidError')).isDisplayed()).toBe(true);
        expect(element(by.css('.nameError')).isDisplayed()).toBe(true);
        expect(element(by.css('.passError2')).isDisplayed()).toBe(true);
        expect(element(by.css('.mailError')).isDisplayed()).toBe(true);
        expect(element(by.css('.passError')).isDisplayed()).toBe(true);

        expect(element(by.css('.contactError')).isDisplayed()).toBe(false);
        expect(element(by.css('.cidError')).isDisplayed()).toBe(false);
        expect(element(by.css('.nameError')).isDisplayed()).toBe(false);
        expect(element(by.css('.passError2')).isDisplayed()).toBe(false);
        expect(element(by.css('.mailError')).isDisplayed()).toBe(false);
        expect(element(by.css('.passError')).isDisplayed()).toBe(false);
        expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/");
        expect(browser.getCurrentUrl()).not.toEqual("http://localhost:3000/dashboard");
    });

    it('should register the user', () => {
        this.customerName.clear();
        this.customerName.sendKeys('Akash Singh');
        //browser.sleep(2000);
        this.customerId.clear();
        this.customerId.sendKeys('1234567898');
        //browser.sleep(2000);
        this.customerContact.clear();
        this.customerContact.sendKeys('7869066665');
        //browser.sleep(2000);
        this.customerEmail.clear();
        this.customerEmail.sendKeys('akash.singh2@cbank.com');
        //browser.sleep(2000);
        this.customerPassword.clear();
        this.customerPassword.sendKeys('A!!day10ng');
        //browser.sleep(2000);
        this.confirmedPassword.clear();
        this.confirmedPassword.sendKeys('A!!day10ng');
        //browser.sleep(2000);

        //browser.sleep(2000);

        expect(element(by.css('.contactError')).isDisplayed()).toBe(true);
        expect(element(by.css('.cidError')).isDisplayed()).toBe(true);
        expect(element(by.css('.nameError')).isDisplayed()).toBe(true);
        expect(element(by.css('.passError2')).isDisplayed()).toBe(true);
        expect(element(by.css('.mailError')).isDisplayed()).toBe(true);
        expect(element(by.css('.passError')).isDisplayed()).toBe(true);

        expect(element(by.css('.contactError')).isDisplayed()).toBe(false);
        expect(element(by.css('.cidError')).isDisplayed()).toBe(false);
        expect(element(by.css('.nameError')).isDisplayed()).toBe(false);
        expect(element(by.css('.passError2')).isDisplayed()).toBe(false);
        expect(element(by.css('.mailError')).isDisplayed()).toBe(false);
        expect(element(by.css('.passError')).isDisplayed()).toBe(false);
        this.submit.click();

        browser.sleep(2000);
        expect(browser.switchTo().alert().getText()).toContain('successfully');
        //browser.switchTo().alert().accept();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/");
        expect(browser.getCurrentUrl()).not.toEqual("http://localhost:3000/login");
    });
});
