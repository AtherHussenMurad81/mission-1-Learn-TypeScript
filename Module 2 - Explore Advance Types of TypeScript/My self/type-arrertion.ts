//  ami jodi TS teke besi buji. Setai type assertion
// for example

let anything: any;

// anything.  kisui dibe na. because ts bujtase na ki dibe
// but

anything = 222;

anything as number; //*  here means type assertion. must be a braket

let anythingString = "murad";

anythingString as string;

const kgToGramConvert = (
  input: string | number,
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    // console.log(value);
    return `Converted Output is: ${Number(value) * 1000}`;
  }
};

const result = kgToGramConvert(2) as number; // sure howar jonno
console.log({ result });
const result2 = kgToGramConvert("2 kg") as string;
console.log({ result2 });
