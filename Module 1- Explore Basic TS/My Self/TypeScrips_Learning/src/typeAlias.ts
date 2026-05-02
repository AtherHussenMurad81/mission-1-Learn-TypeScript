//* "Its called type Alias";

type User = {
  //* its a name alias
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Hussen",
    lastName: "Murad",
  },
  gender: "male",
  contactNo: "01601672639",
  address: {
    division: "Sylhet",
    city: "Sylhet",
  },
};
const user2: User = {
  id: 456,
  name: {
    firstName: "muaz",
    lastName: "hussen",
  },
  gender: "male",
  contactNo: "01601949471",
  address: {
    division: "Sylhet",
    city: "Sylhet",
  },
};

// * function used type alias
type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => {
  return num1 + num2;
};
