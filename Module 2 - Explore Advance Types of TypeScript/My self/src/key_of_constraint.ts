//?  must be know key of operator=> keyOf: type operator

// * string যদি type এর মতন আচরণ করে তখন তাকে বলি =>
//?String literal type.

type RichPeopleVehicle = {
  car: string;
  bike: string;
  cycle: string;
};

type Vehicle1 = "car" | "bike" | "cycle";
// ? keyof operator er maddome

type Vehicle2 = keyof RichPeopleVehicle;
// also

// const myVehicle: Vehicle1 = "motor"; //also not accepted
// const myVehicle2: Vehicle2 = "motor"; // not accepted

// ? key of constraint

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};
const user: User = {
  id: 123,
  name: "murad",
  address: {
    city: "Sylhet",
  },
};

// const myId = user.id;
// const myId2 = user["id"];
// console.log({ myId, myId2 });

// const getPropertyFromObj = (
//   obj: User,
//   key: keyof User | "name" | "address",
// ) => {
//   return obj[key];

//? error => cannot find key. I means ID... arrow put dowm for User type used || Keyof User
// };
const getPropertyFromObj = <X>(obj: X, key: keyof X) =>
  //?   | "name" | "address")
  {
    return obj[key];

    //? error => cannot find key. I means ID... arrow put dowm for User type used || Keyof User
  };
const result3 = getPropertyFromObj(user, "name");
console.log(result);

const product = {
  brand: "HP",
};

const result5 = getPropertyFromObj(product, "brand"); //its cannot work for defind User type
