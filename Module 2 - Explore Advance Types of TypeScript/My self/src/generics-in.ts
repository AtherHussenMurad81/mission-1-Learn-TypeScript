//  dynamically generalize kora

// type GenericArray = Array<value>;
// ?generic array

type GenericArray<value> = Array<value>; //? here value write as T

// const friends: string[] = ["murad", "nowshad", "muaz"];

const friends: GenericArray<string> = ["murad", "nowshad", "muaz"];

// sme to

// const friends: Array<string> = ["murad", "nowshad", "muaz"];
// const rollNo: number[] = [4, 7, 11];

//similar way

// const rollNo: Array<number> = [4, 7, 11];

const rollNo: GenericArray<number> = [4, 7, 11];

// const isEligibleList: boolean[] = [true, false, true];

// const isEligibleList: Array<boolean> = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

// .............

// type Coordinates = [number, number];
type GenArray<T> = Array<T>;
//same type er upor generic array implements kora hoise

const coordinates: GenArray<number> = [20, 30];
const coordinatesString: GenArray<string> = ["20", "30"];

//* use case its array of object generic object

// const userList: GenArray<object> =
//   // ? dont use it. some demerits site
//   [
//     {
//       name: "hablu",
//       age: 22,
//     },
//     {
//       name: "tablu",
//       age: 25,
//     },
//   ];
interface UserList {
  name: string;
  age: number;
}

// but  here is current way to use generic array
const userList5: GenArray<UserList> =
  // {
  //   name: string;
  //   age: number;
  // }
  // ? dont use it. some demerits site
  [
    {
      name: "hablu",
      age: 22,
    },
    {
      name: "tablu",
      age: 25,
    },
  ];
