type User1 = {
  name: string;
  age: number;
};
type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;
//? Type interface
interface IuserWithRole extends IUser {
  role: "admin" | "user";
}
const user1: User1 = {
  name: "Murad",
  age: 100,
};
const user2: UserWithRole = {
  name: "Momshad",
  age: 102,
  role: "user",
};

//  type Interface below

// interface only work in object type dataType like:- array, object and function
interface IUser {
  name: string;
  age: number;
}

type Add = (num1: number, num2: number) => number;
// const add: Add = (num1, num2) => num1 + num2;

// use interface for function

interface IAdd {
  (num1: number, num2: number): number;
}
const add: Add = (num1, num2) => num1 + num2;
const addI: IAdd = (num1, num2) => num1 + num2;

// .............

type Friends = string[];
// const friedns: string[] = ["a", "b", "c"];
// const friends: Friends = ["a", "b", "c"];

interface IFriends {
  [index: number]: string; //indexing.
}
const friends2: IFriends = ["a", "b", "c"];

// kokon kunta use korbo => always simplicity maintain korar try korbo...
