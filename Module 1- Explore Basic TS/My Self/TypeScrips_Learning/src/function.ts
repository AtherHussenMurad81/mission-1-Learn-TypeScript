// Function

// type is two, array function and normal function

function add(num1: number, num2: number): number {
  // its return a number
  return num1 + num2;
}
// console.log(add(2, 2));

// arrow
const addArr = (num1: number, num2: number): number => num1 + num2;
// console.log(addArr(2, 2));

// object => function define thats called method

const poorUser = {
  name: "Murad",
  balance: 0,

  addBalance(newBalance: number): number {
    return this.balance + newBalance;
  },
};
poorUser.addBalance(299);
// console.log(poorUser.balance);

const arr: number[] = [12, 4, 5, 56];
const arrasq: number[] = arr.map((a: number) => a ** 2);
console.log(arrasq);
