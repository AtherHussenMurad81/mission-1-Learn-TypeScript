// access >> modify

class BankAccount2 {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  private addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }

  callHiddenMethod(balance: number) {
    this.addBalance(balance);
  }
}

class StudentBankAccount2 extends BankAccount2 {
  test() {
    // this.
  }
}

const mezbaBhaiAccount2 = new BankAccount2(111, "Mezba", 20);

// mezbaBhaiAccount.
