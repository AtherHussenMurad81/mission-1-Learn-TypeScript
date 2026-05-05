// Utility Types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string; //? its string or undefined
}; //? its manually create productSummary but Pick<> easier than this under here.

type ProductSummary = Pick<Product, "id" | "name" | "price">;

// ? jei information dorkar nei ta bad dite Omit type use kora hoy
type ProductWithoutStock = Omit<Product, "stock" | "color">;

type ProductWithColor = Required<Product>;

const product1: ProductWithColor = {
  id: 222,
  name: "Mouse",
  price: "20",
  stock: 100,
  color: "black",
};

//?  all information option (?) hobe amra Partial use korte pari

type OptionProduct = Partial<Product>;

// ? all information want to readonly. i can use Readonly

type ProductReadonly = Readonly<Product>;

// ? dan pase string and bam pase unknown use korbo..
// * kokono jodi empty object lage, tahole amra Record use korbo. because of use case is more easy

const emptyObj: Record<string, unknown> = {};

const product2 = {
  id: 222,
  name: "Mouse",
  price: "20",
};
