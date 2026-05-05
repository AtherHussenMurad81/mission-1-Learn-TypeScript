"use strict";
// ? opp =- class - object
// * property define kora hoise
// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
// }
// const dog = new Animal("doges", "dogsp", "ghew ghew");
// dog.name;
// // console.log(dog); //? Output: Animal { name: 'doges', species: 'dogsp', sound: 'ghew ghew' }
// const cat = new Animal("cat bhai", "cet", "mew mew");
// console.log(cat);
//* ....................
// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   constrccuctor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   //* its called class method
//   makeSound() {
//     console.log(`the ${this.name} is making sound ${this.sound} `);
//   }
// }
// const cat = new Animal("cat bhai", "cet", "mew mew");
// const dog = new Animal("doges", "dogsp", "ghew ghew");
// console.log(cat.makeSound()); //undefined
// dog.makeSound();
// ? Parameter properties
class Animal {
  name;
  species;
  sound;
  constructor(name, species, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
}
const cat = new Animal("mruad", "mom", "now");
// console.log(object);
// cat.makeSound();
console.log(cat);
cat.name;
