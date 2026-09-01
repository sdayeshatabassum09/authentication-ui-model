let employees = [
  {
    id: 101,
    firstName: "Virat",
    lastName: "kohli",
    email: "viratkohli@yahoo.com",
    phone: "9876543210",
    department: "IT",
    designation: "Software Engineer",
    location: "Banglore",
    status: "ACTIVE",
    createdDate: "2026-01-10",
    updatedDate: "2026-08-20",
  },
  {
    id: 102,
    firstName: "Rosy",
    lastName: "kumari",
    email: "priyakumari@gmail.com",
    phone: "9876543211",
    department: "HR",
    designation: "HR Executive",
    location: "Hyderabad",
    status: "ACTIVE",
    createdDate: "2026-02-15",
    updatedDate: "2026-08-21",
  },
  {
    id: 103,
    firstName: "Rohit",
    lastName: "Sharma",
    email: "rohit.sharma@yahoo.com",
    phone: "9876543212",
    department: "Finance",
    designation: "Accountant",
    location: "Mumbai",
    status: "INACTIVE",
    createdDate: "2026-03-12",
    updatedDate: "2026-07-10",
  },
  {
    id: 104,
    firstName: "Dhoni",
    lastName: "MS",
    email: "msdhoni@gmail.com",
    phone: "9876543213",
    department: "IT",
    designation: "Frontend Developer",
    location: "Chennai",
    status: "INACTIVE",
    createdDate: "2026-04-05",
    updatedDate: "2026-08-25",
  },
  {
    id: 105,
    firstName: "priyanka",
    lastName: "singh",
    email: "priyanka009@gmail.com",
    phone: "9876543214",
    department: "Sales",
    designation: "Sales Executive",
    location: "Mumbai",
    status: "ACTIVE",
    createdDate: "2026-05-01",
    updatedDate: "2026-08-22",
  },
];

export const getEmployees = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...employees]);
    }, 500);
  });
};

export const getEmployeeById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const employee = employees.find(
        (item) => item.id === Number(id)
      );

      if (employee) {
        resolve(employee);
      } else {
        reject(new Error("Employee not found"));
      }
    }, 500);
  });
};

export const createEmployee = async (employee) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newEmployee = {
        ...employee,
        id: Date.now(),
        createdDate: new Date()
          .toISOString()
          .split("T")[0],
        updatedDate: new Date()
          .toISOString()
          .split("T")[0],
      };

      employees.push(newEmployee);

      resolve(newEmployee);
    }, 500);
  });
};

export const updateEmployee = async (id, updatedEmployee) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = employees.findIndex(
        (employee) => employee.id === Number(id)
      );

      if (index === -1) {
        reject(new Error("Employee not found"));
        return;
      }

      employees[index] = {
        ...employees[index],
        ...updatedEmployee,
        updatedDate: new Date()
          .toISOString()
          .split("T")[0],
      };

      resolve(employees[index]);
    }, 500);
  });
};

export const deleteEmployee = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exists = employees.some(
        (employee) => employee.id === Number(id)
      );

      if (!exists) {
        reject(new Error("Employee not found"));
        return;
      }

      employees = employees.filter(
        (employee) => employee.id !== Number(id)
      );

      resolve(true);
    }, 500);
  });
};