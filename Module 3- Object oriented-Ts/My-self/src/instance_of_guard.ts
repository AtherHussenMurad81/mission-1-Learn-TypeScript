//? oops: instance of type guard || type narrowing

// * initial value
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} daily ${numOfHours} gonta guma`);
  }
}
class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta study koe`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta class nei`);
  }
}

// function guard

const isStudent = (user: Person) => {
  return user instanceof Student; // user is Student
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher; // user is Teacher
};

const getUserInfo = (user: Person) => {
  // * without condition TS gives me as a common value like {Person typer er value=> name and getSleep}

  /*
if(user instance of student){

user.doStudy(10)}
similar Teacher and getSleep condition

*/
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(15);
  }
};

const student1 = new Student("Mr. student");
const teacher1 = new Teacher("Mr. teacher");
const person1 = new Person("Mr. Person");

getUserInfo(person1);
