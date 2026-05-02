// union => "|"

type UserRole = "admin" | "user" | "guest";

const getDashboard: UserRole = (role) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "user Dashboard";
  } else {
    return "guest Dashboard";
  }
};

// console.log(getDashboard("user"));

// *........................

//* intersection => &&

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
  id: "123",
  name: "Chowdhury Shaheb",
  phoneNo: "017",
  designation: "manager",
  teamSize: 20,
};
