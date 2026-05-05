//  ? : ternary operator : decision making
//  ?? : nullish coalescing operator => null and undefined
//  ?. optional chaining

// const userAge = 21;

// const isEligible = (age: number) => {
//   if (age >= 21) {
//     console.log("You are eligible");
//   } else if (age > 70) {
//     console.log("Tor morar boyos hoise. Ebadot kor beta");
//   } else {
//     console.log("You are not eligible");
//   }

//   const result =
//     age > 50
//       ? "Bura Hoisos, Biyer kayes jay na kn"
//       : age > 20
//         ? "Kobe biye korso boss"
//         : "Boyos kom, Chup cap porte bos";
//   console.log(result);
// };

// isEligible(20);

const isEligible = (age: number) => {
  const result =
    age > 50
      ? "Bura Hoisos, Biyer kayes jay na kn"
      : age > 20
        ? "Kobe biye korso boss"
        : "Boyos kom, Chup cap porte bos";
  return result;
};

console.log(isEligible(20));

// ? Nullish=> it works only null and undefined

const userTheme = undefined;
const userTheme2 = null;
const selectedTheme = userTheme ?? "Light theme";

console.log(selectedTheme); //* Output: Light theme


