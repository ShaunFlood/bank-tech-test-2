const BankAccount = require ('./Bank_Account.js')

describe('The bank account should display a zero balance', () => {
    it('When we call for the balance it should be zero', () => {
        const account = new BankAccount()
        expect(account.getBalance()).toBe(0);
    })
});