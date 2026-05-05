// array, object

// let bazarList: string[] = ["eggs", "milk", "sugar"];
// bazarList.push("non-ts");
// console.log(bazarList);

let mixedArray: (string | number)[] = ["eggs", 12];

mixedArray.push("murad");
// console.log(mixedArray);

// ......

// explore tuple

let co_ordinate: [number, number] = [20, 30];

//* Type '[string, string, string]' is not assignable to type '[string, string]'.
// let couple: [string, string] = ["husband", "wife", "soon"];
//*   Source has 3 element(s) but target allows only 2.
// let couple: [string, string, string] = ["husband", "wife", "soon", 57];
// fifo method tuple
// console.log(couple);

// object or reference type

// const user: {
//   firstName: string;
//   middleName: string;
//   lastName: string;
// } = {
//   firstName: "Ather",
//   middleName: "Hussen",
//   lastName: "Murad",
// };
// error;
// const user: {
//   firstName: string;
//   middleName?: string; //optional
//   lastName: string;

//   //   if i cannot change the value. we directly value input as a type //* for example
//   role: "Admin"; //its called literal type.
//   isMarried: boolean;
// } = {
//   firstName: "Ather",
//   //   middleName: "Hussen",
//   lastName: "Murad",
//   isMarried: true,
//   role: "Admin",
// };

// .....2nd ways
const user: {
  firstName: string;
  middleName?: string; //optional
  lastName: string;

  //   if i cannot change the value. we directly value input as a type //* for example
  readonly role: string; //its called access modifier || read Only
  isMarried: boolean;
} = {
  firstName: "Ather",
  //   middleName: "Hussen",
  lastName: "Murad",
  isMarried: true,
  role: "Admin",
};
console.log(user);
