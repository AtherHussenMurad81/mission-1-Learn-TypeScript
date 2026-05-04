//?  as const assertion

// ? enum URoles {
// ?   Admin = "Admin",
// ?   Editor = "Editor",
// ?   Viewer = "Viewer",
// ? }
// const URoles = {
//   // * its cannot use as a type
//   Admin: "Admin",
//   Editor: "Editor",

//   Viewer: "Viewer",
// } as const; //=>//? পরিবর্তন না করার জন্যে।
// /*
// type const = {
//     readonly Admin: "Admin";
//     readonly Editor: "Editor";
//     readonly Viewer: "Viewer";
//     must be need this two operator
//     1. type of operator
//     2. jey of operator
// }
//     */

// const canEditHere = (role: keyof typeof URoles) => {
//   if (role === URoles.Admin || role === URoles.Editor) {
//     return true;
//   } else return false;
// };

// const isEditPermissibleHere = canEditHere(URoles.Admin);
// console.log(isEditPermissibleHere);

// ? 2nd ways

const URoles = {
  // * its cannot use as a type
  Admin: "ADMIN",
  Editor: "EDITOR",

  Viewer: "VIEWER",
} as const; //=>//? পরিবর্তন না করার জন্যে।
/*
type const = {  
    readonly Admin: "Admin";
    readonly Editor: "Editor";
    readonly Viewer: "Viewer";
    must be need this two operator
    1. type of operator
    2. jey of operator
}
    */

const canEditHere = (role: (typeof URoles)[keyof typeof URoles]) =>
  // *const URoles: {
  //     readonly Admin: "ADMIN";
  //     readonly Editor: "EDITOR";
  //     readonly Viewer: "VIEWER";
  // }
  {
    if (role === URoles.Admin || role === URoles.Editor) {
      return true;
    } else return false;
  };

const isEditPermissibleHere = canEditHere(URoles.Admin);
console.log(isEditPermissibleHere);
