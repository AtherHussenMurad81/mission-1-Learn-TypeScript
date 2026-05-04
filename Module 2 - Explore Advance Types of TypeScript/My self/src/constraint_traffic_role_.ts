// * constraint: strict rules deya
//? generic function implements

const addStudentToCourse = <T>(studentInfo: T) => {
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
const result = addStudentToCourse(st1);
// console.log(result);
