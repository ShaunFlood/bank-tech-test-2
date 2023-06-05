const BankAccount = require ('./Bank_Account.js')

describe('Bank account functionality', () => {
    it('When we call for the balance it should be zero', () => {
        const account = new BankAccount()
        expect(account.getBalance()).toBe(0);
    })
    describe('Withdrawal functionality', () => {
        it('When we call to withdraw money funds should decrease from the balance after a deposit is made', () => {
            const account = new BankAccount()
            account.deposit(500)
            account.withdraw(400)
            expect(account.getBalance()).toBe(100);
        })
        it('When we try to withdraw with a zero balance, then throw an error message', () => {
            const account = new BankAccount()
            expect(() => {
                account.withdraw(400);
            }).toThrow('Invalid withdrawal amount');
        })
        it('When we try to withdraw a amount greater than the balance, then throw an error message', () => {
            const account = new BankAccount
            account.deposit(500)
            expect(() => {
                account.withdraw(600);
            }).toThrow('Invalid withdrawal amount');
        })
        it('When we try to withdraw a negative amount, then throw an error message', () => {
            const account = new BankAccount 
            expect(() => {
                account.withdraw(-200);
                }).toThrow('Invalid withdrawal amount')
        })
        it('When we try to withdraw more than 5001 when we have sufficent funds, then throw an error message', () => {
            const account = new BankAccount
            account.deposit(5001)
            expect(() => {
                account.withdraw(5001);
            }).toThrow('Your withdrawal limit is 5000 per transaction')
        })
    })
    describe('Deposit functionality', () => {   
        it('When we call to deposit funds the balance should increase to that number', () => {
            const account = new BankAccount()
            account.deposit(500)
            expect(account.getBalance()).toBe(500);
        })
        it('When we try to deposit a negative number, then throw an error', () => {
            const account = new BankAccount()
            expect(() => {
                account.deposit(-200);
            }).toThrow('Invalid deposit amount')
        })
    });
});