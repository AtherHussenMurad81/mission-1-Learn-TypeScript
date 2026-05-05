// * constraint: strict rules deya
//? generic function implements
// * some demerit side. here all of object have been declear it..
// const addStudentToCourse = <T>(studentInfo: T) => {
//   return {
//     course: "next Level",
//     ...studentInfo,
//   };
// };

// const st1 = {
//   name: "murad",
//   isStudent: true,
//   sub: "accounting",
// };
// const st2 = {
//   name: "nowshad",
//   ismarried: false,
//   class: 3,
//   background: "Madrasha",
// };

// const st3 = {
//   hasWatch: true,
// };

// const result = addStudentToCourse(st3);
// console.log(result);

// ? যখন আমাদের নাম এবং আইডি লাগবেই। এমন যদি হয়, তাহলে তাকে এইগুলো চিনাতে হবে। এটার জন্যে আমরা Constraint ব্যবহার করতে পারি।

// * for example

// const addStudentToCourse = <
//   T extends {
//     id: number;
//     name: string; //? its called constraint... => traffic roles
//   },
// >(
//   studentInfo: T,
// ) => {
//   return {
//     course: "next Level",
//     ...studentInfo,
//   };
// };

// const st1 = {
//   name: "murad",
//   isStudent: true,
//   sub: "accounting",
// };
// const st2 = {
//   name: "nowshad",
//   ismarried: false,
//   class: 3,
//   background: "Madrasha",
// };

// const st3 = {
//   hasWatch: true,
// };

// const result = addStudentToCourse(st3);
// console.log(result);

// * jodi onek boro hoy tahole amra eta use korte pari

type Student = {
  id: number;
  name: string;
  class: string;
};
const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "next Level",
    ...studentInfo,
  };
};

const st1 = {
  name: "murad",
  isStudent: true,
  sub: "accounting",
};
const st2 = {
  name: "nowshad",
  ismarried: false,
  class: 3,
  background: "Madrasha",
};

const st3 = {
  hasWatch: true,
};

const result = addStudentToCourse(st3); //? error => {<> Argument of type '{ hasWatch: boolean; }' is not assignable to parameter of type 'Student'.
//?   Type '{ hasWatch: boolean; }' is missing the following properties from type 'Student': id, name, class </>}
console.log(result);
