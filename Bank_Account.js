class BankAccount {
    constructor() {
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }
    deposit(number) {
        this.balance += number;
    }
    withdraw(number) {
        if (number <= 0 || number > this.balance)
            throw new Error('Invalid withdrawal amount') 
        if (number >= 5001)
            throw new Error('Your withdrawal limit is 5000 per transaction')
        this.balance -= number;
    }
}

module.exports = BankAccount