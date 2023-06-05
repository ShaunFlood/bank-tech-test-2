const BankAccount = require ('./Bank_Account.js')

describe('The bank account should display a zero balance', () => {
    it('When we call for the balance it should be zero', () => {
        const account = new BankAccount()
        expect(account.getBalance()).toBe(0);
    })
    it('When we call to deposit funds the balance should increase to that number', () => {
        const account = new BankAccount()
        account.deposit(500)
        expect(account.getBalance()).toBe(500);
    })

});