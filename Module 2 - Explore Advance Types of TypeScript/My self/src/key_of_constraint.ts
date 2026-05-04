//?  must be know key of operator=> keyOf: type operator

// * string যদি type এর মতন আচরণ করে তখন তাকে বলি =>
//?String literal type.

type RichPeopleVehicle = {
  car: string;
  bike: string;
  cycle: string;
};

type vehicle1 = "car" | "bike" | "cycle";
// ? keyof operator er maddome

type vehicle2 = keyof RichPeopleVehicle;
