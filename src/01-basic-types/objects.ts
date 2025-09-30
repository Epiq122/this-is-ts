// ============================================
// OBJECTS IN TYPESCRIPT
// ============================================

// Object type annotation
const user: { name: string; age: number; email: string } = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

// Optional properties
const partialUser: { name: string; age?: number } = {
  name: "Bob",
};

// Readonly properties
const readonlyUser: { readonly id: number; name: string } = {
  id: 1,
  name: "Charlie",
};
// readonlyUser.id = 2; // Error! Cannot reassign readonly property

// Index signatures - for dynamic properties
const userScores: { [key: string]: number } = {
  math: 95,
  science: 87,
  english: 92,
};

// Intersection types - combining multiple types
type Person = { name: string; age: number };
type Employee = { employeeId: number; department: string };
type EmployeePerson = Person & Employee;

const worker: EmployeePerson = {
  name: "David",
  age: 35,
  employeeId: 12345,
  department: "Engineering",
};

// Type aliases for complex objects
type Address = {
  street: string;
  city: string;
  country: string;
  zipCode?: string;
};

const address: Address = {
  street: "123 Main St",
  city: "New York",
  country: "USA",
  zipCode: "10001",
};

// Nested objects
type Company = {
  name: string;
  address: Address;
  employees: number;
};

const company: Company = {
  name: "Tech Corp",
  address: {
    street: "456 Tech Ave",
    city: "San Francisco",
    country: "USA",
  },
  employees: 500,
};

export {
  user,
  address,
  company,
  worker,
};
