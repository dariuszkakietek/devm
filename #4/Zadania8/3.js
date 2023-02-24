class Account {
  constructor(balance, accountNumber) {
    this.balance = balance;
    this.accountNumber = accountNumber;
  }

  deposit(value) {
    this.balance += value;
    console.log(`Wpłacono ${value}zł. Aktualny stan konta: ${this.balance}zł.`);
  }

  withdraw(value) {
    if (this.balance > value) {
      this.balance -= value;
      console.log(
        `Wypłacono ${value}zł. Aktualny stan konta: ${this.balance}zł.`
      );
    } else {
      console.log("Nie masz wystarczającej ilości środków na koncie.");
    }
  }

  getBalance() {
    console.log(`Aktualny stan konta: ${this.balance}zł.`);
  }

  getAccountNumber() {
    console.log(`Twój numer konta: ${this.accountNumber}`);
  }
}

// const account = new Account(13, "0987654321");

// account.withdraw(10);
// console.log("=============");
// account.deposit(5);
// console.log("=============");
// account.getBalance();
// console.log("=============");
// account.getAccountNumber();

class SavingAccount extends Account {
  constructor(balance, accountNumber, interest) {
    super(balance, accountNumber);
    this.interest = interest;
  }

  setInterest(value) {
    this.interest += value;
  }
}

class CurrentAccount extends Account {
  constructor(balance, accountNumber, overdraft_limit) {
    super(balance, accountNumber);
    this.overdraft_limit = overdraft_limit;
  }

  setOverdraftLimit(value) {
    this.overdraft_limit += value;
  }
}

class Bank {
  accounts = [
    new SavingAccount(10, "12345", 1),
    new SavingAccount(20, "43213", 2),
    new SavingAccount(30, "12343", 3),
    new SavingAccount(40, "45643", 4),
    new CurrentAccount(50, "78972", 100),
    new CurrentAccount(50, "56677", 150),
    new CurrentAccount(50, "85545", 200),
    new CurrentAccount(50, "92343", 250),
  ];
}

const bank = new Bank();

bank.accounts.map((account) => {
  if (account instanceof SavingAccount) {
    account.setInterest(1);
  } else if (account instanceof CurrentAccount) {
    account.setOverdraftLimit(10);
  }
});

console.log(bank.accounts);
