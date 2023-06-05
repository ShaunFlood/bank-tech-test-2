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
        if (this.balance == 0)
            throw new Error('Invalid withdrawal amount') 
        this.balance -= number;
    }
}

module.exports = BankAccount