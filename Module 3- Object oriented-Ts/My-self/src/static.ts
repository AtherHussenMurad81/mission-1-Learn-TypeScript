// static: পরিবর্তন হয় না।
//  Dynamic: পরিবর্তন হয়।

// class Counter {
//   count: number = 0;
//   increment() {
//     return (this.count = this.count + 1);
//   }

//   decrement() {
//     return (this.count = this.count - 1);
//   }
// }

// const instance1 = new Counter();

// // instance1.decrement();
// // instance1.increment();

// console.log(instance1.increment());
// console.log(instance1.increment());
// console.log(instance1.increment());
// // console.log(instance1.decrement());

// const instance2 = new Counter();
// console.log(instance2.increment());
// console.log(instance2.increment());
// console.log(instance2.increment());
// Output: 1
// Output: 2
// Output: 3
// Output: 1
// Output: 2
// Output: 3

//>>>>>>>>>>>>>>>>>>>>>

//  But here
// class Counter {
//   static count: number = 0;
//   static increment() {
//     return (Counter.count = Counter.count + 1);
//   }

//   static decrement() {
//     return (Counter.count = Counter.count - 1);
//   }
// }

// const instance1 = new Counter();

// instance1.decrement();
// instance1.increment();

// console.log(instance1.increment());
// console.log(instance1.increment());
// console.log(instance1.increment());
// // console.log(instance1.decrement());

// const instance2 = new Counter();
// console.log(instance2.increment());
// console.log(instance2.increment());
// console.log(instance2.increment());

// ? Output: 1
// ? Output: 2
// ? Output: 3
// ? Output: 4
// ? Output: 5
// ? Output: 6

//  Another ways
class Counter {
  static count: number = 0;
  static increment() {
    return (Counter.count = Counter.count + 1);
  }

  static decrement() {
    return (Counter.count = Counter.count - 1);
  }
}
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
