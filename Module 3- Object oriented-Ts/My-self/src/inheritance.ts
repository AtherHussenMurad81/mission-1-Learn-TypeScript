//? class Student {
//?   name: string;
//?   age: number;
//?   address: string;
//?   constructor(name: string, age: number, address: string) {
//?     this.name = name;
//?     this.age = age;
//?     this.address = address;
//?   }

//   //?   vitorer value ta nite this.key use kori. bairer gula //? function er parameter  {example (numofHour)} hisabe receive korte hoy...

//   getSleep(numOFhours: number) {
//     console.log(`${this.name} ${numOFhours} gonta gumaw`);
//   }
// }

// const student1 = new Student(`murad`, 18, "sylhet");

// //? console.log(student1);
// //? student1.getSleep(15);

// //? >>>>>>>>>>>>>>>>>//?

//? class Teacher {
//?   name: string;
//?   age: number;
//?   address: string;
//?   designation: string;
//?   constructor(name: string, age: number, address: string, designation: string) {
//?     this.name = name;
//?     this.age = age;
//?     this.address = address;
//?     this.designation = designation;
//?   }
//?   takeClass(classTime: number) {
//?     console.log(`${this.name} ${classTime} gonta class nen`);
//?   }
//? }

// ?const sharifSir = new Teacher("Sharif Sir", 40, "Sylhet", "Teacher");

//? sharifSir.takeClass(20);

// *.................

class Parents {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  //   vitorer value ta nite this.key use kori. bairer gula //? function er parameter  {example (numofHour)} hisabe receive korte hoy...

  getSleep(numOFhours: number) {
    console.log(`${this.name} ${numOFhours} gonta gumaw`);
  }
}
// class Student extends Parents {
//   //? why cannot define here constractor.
// ?  //  because ts auto define here constractor
// }
class Student extends Parents {
  rollNo: number;
  constructor(name: string, age: number, address: string, rollNo: number) {
    super(name, age, address);
    this.rollNo = rollNo;
  }
}

const student1 = new Student(
  `murad`,
  18,
  "sylhet",
  //inheritance dewar por rollNo cabe
  89,
);

// student1.
// console.log(student1);
// student1.getSleep(15);

// >>>>>>>>>>>>>>>>>//?

class Teacher extends Parents {
  designation: string; //* its her own property thats why i cannot remove here
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    // eitar mane parents er constractor. =>
    //? nise call korle error dibe

    this.designation = designation;
  }
  takeClass(classTime: number) {
    console.log(`${this.name} ${classTime} gonta class nen`);
  }
}

const sharifSir = new Teacher("Sharif Sir", 40, "Sylhet", "Teacher");

//***** => */ sharifSir.
