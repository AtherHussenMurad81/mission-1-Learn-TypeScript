// ? access or mamla dibo

// ? in typeof

type Alphaneumeric = number | string;
// its call type narrowing
const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
  //   return num1 + num2;
  //   num1.
  if (typeof num1 === "number" && typeof num2 === "number") {
    // num1.toFixed here num1 and 2 is a number
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};
const result = add(2, "4");
// add(2, 2);
console.log(result);

// ? In guard....

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  //   console.log(
  //     //cannot suggest user.name
  //     `This ${user.name}
  //     and his role is: ${user.}`);

  if ("role" in user) {
    console.log(` ${user.name} and his role is: ${user.role}`);
  } else {
    console.log(` ${user.name}`);
  }
};
getUserInfo({
  name: "Normal",
  role: "Admin",
});
