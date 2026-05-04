"use strict";
// ? its cannot recommonded of senior developer
//*  concept => js can not exist enum concept
//?  set of fixed string Literal কেেএক জায়গায় রাখে।
// * type cannot use as a value for ts restriction
// type UserRoles = "Admin" | "Editor" | "Viewer";
// const canEdit = (role: UserRoles) => {
//   // if(UserRoles) cannot used
//   if (role === "Admin" || role === "Editor") {
//     return true;
//   } else return false;
// };
// const isEditPermissible = canEdit("Admin");
// console.log(isEditPermissible);
// অনেকগুলো code থাকলে এটি use করা ঠিক নয়।
// * Enum method
// Error dibe eita =>  SyntaxError [ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX]: TypeScript enum is not supported in strip-only mode
var UserRoles2;
// its emideatly inbob function  use kore
(function (UserRoles2) {
  UserRoles2["Admin"] = "Admin";
  UserRoles2["Editor"] = "Editor";
  UserRoles2["Viewer"] = "Viewer";
})(UserRoles2 || (UserRoles2 = {}));
const canEdit = (role) => {
  // but (UserRoles //? type used) can used
  if (role === UserRoles2.Admin || role === UserRoles2.Editor) {
    return true;
  } else return false;
};
const isEditPermissible = canEdit(UserRoles2.Admin);
console.log(isEditPermissible);
// *  node --experimental-transform-types another-example.ts
