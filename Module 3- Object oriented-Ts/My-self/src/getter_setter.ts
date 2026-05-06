// class BankAccount {
//   public readonly userId: number;
//   public userName: string;
//   private _userBalance: number;

//   constructor(userId: number, userName: string, userBalance: number) {
//     this.userId = userId;
//     this.userName = userName;
//     this._userBalance = userBalance;
//   }

//   //    set the balance

//   addBalance(balance: number) {
//     this._userBalance = this._userBalance + balance;
//   }

//   //   get korbo

//   getBalance() {
//     return this._userBalance;
//   }
// }

// const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);

// mezbaBhaiAccount.addBalance(100); //* function call korte hoccehe
// mezbaBhaiAccount.addBalance(70);

// // console.log(mezbaBhaiAccount);

// console.log(mezbaBhaiAccount.getBalance()); //* function call korte hocche

//? 170 main balance get kortasi

// * function sara kuno kisu get korle take getter bole. and set korle take setter bole

// .....................

//*  getter and setter use kore kora hoise

// benifit without function calling,  i can both get and set..
class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  // setter use kore

  set addBalance(amount: number) {
    //set korar ketre kuno kisu return korte hocche na. tai return korte hocche na.... jehetu set korsi tai..

    this._userBalance = this._userBalance + amount;
  }

  //   getter use kore get kora hoise
  get getBalance() {
    return this._userBalance;
  }
}

const mezbaBhaiAccount2 = new BankAccount(111, "Mezba", 20);

const add = (mezbaBhaiAccount2.addBalance = 100);
const balance = mezbaBhaiAccount2.getBalance;

// Output: => BankAccount { userId: 111, userName: 'Mezba', _userBalance: 120 }
