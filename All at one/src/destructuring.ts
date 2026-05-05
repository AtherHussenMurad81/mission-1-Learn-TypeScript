//* object destructuring

const user = {
  id: 123,
  name: {
    firstName: "Ather",
    moddleName: "Hussen",
    LastName: "Murad",
  },
  gender: "male",
  favoriteColor: "Blue",
};

const { gender, name } = user;
console.log(name);

//* array destructuring

const friends = ["karim", "rahim"];

const [, bestFriends] = friends;
console.log(bestFriends);
