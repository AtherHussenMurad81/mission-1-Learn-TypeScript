//generic type aniyes

type GenericArr<T> = Array<T>;

type User3 = {
  name: string;
  age: number;
};

const userList: GenericArr<User> = [
  {
    name: "murad",
    age: 23,
  },
];

// generic with interface
// poor type
interface Developer<T> {
  name: string;
  salary: number;
  device: {
    model: string;
    brand: string;
    releasedYear: string;
  };
  smartWatch: T;
}

// ? Rich type

interface BrandSaraWatch {
  heartRate: string;
  stopWatch: boolean;
}

// also
interface BrandWithWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  aiFeature: boolean;
}
const poorDev: Developer<BrandSaraWatch> =
  //{
  //   heartRate: string;
  //   stopWatch: boolean;
  //}
  {
    name: "mr poor",
    salary: 20,
    device: {
      model: "A21",
      brand: "lenovo",
      releasedYear: "2020",
    },
    smartWatch: {
      heartRate: "200",
      stopWatch: true,
    },
  };

// ...................

const richDev: Developer<BrandWithWatch> =
// {
//   heartRate: string;
//   callSupport: boolean;
//   calculator: boolean;
//   aiFeature: boolean;
// }
  {
    name: "mr rich",
    salary: 20000,
    device: {
      model: "X34",
      brand: "HP",
      releasedYear: "2025",
    },
    smartWatch: {
      heartRate: "200",
      callSupport: true,
      calculator: true,
      aiFeature: true,
    },
  };
