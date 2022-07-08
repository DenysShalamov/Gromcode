class Wallet {
  constructor() {
    this._balance = 0;
  }

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('No enough founds');
      return;
    }
    this._balance -= amount;
  }
}

const wallet1 = new Wallet();
