// generic function

const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayWithUserObj = (value: { id: number; name: string }) => {
  return [value];
};

const arrString = createArrayWithString("apple");
const arrNumber = createArrayWithNumber(444);

const arrObject = createArrayWithUserObj({
  id: 4,
  name: "murad",
});

// * constraint: strict rules deya

//? generic function implements

const addStudentToCourse1 = <T>(studentInfo: T) => {
  return {
    course: "next Level",
    ...studentInfo,
  };
};

const st11 = {
  name: "murad",
  isStudent: true,
  sub: "accounting",
};
const st22 = {
  name: "nowshad",
  ismarried: false,
  class: 3,
  background: "Madrasha",
};
const result1 = addStudentToCourse(st1);
// console.log(result);
