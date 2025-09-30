// ============================================
// TYPESCRIPT FUNDAMENTALS - MAIN ENTRY POINT
// ============================================

console.log("=".repeat(50));
console.log("TypeScript Fundamentals Examples");
console.log("=".repeat(50));

// ============================================
// 1. Basic Types
// ============================================
console.log("\n1. BASIC TYPES");
console.log("-".repeat(50));

import { userName, greeting, age, isActive } from "./01-basic-types/primitives";
console.log(`User: ${userName}`);
console.log(`Greeting: ${greeting}`);
console.log(`Age: ${age}`);
console.log(`Is Active: ${isActive}`);

import { numbers, names, person, coordinates } from "./01-basic-types/arrays-tuples";
console.log(`Numbers: [${numbers.join(", ")}]`);
console.log(`Names: [${names.join(", ")}]`);
console.log(`Person: [${person[0]}, ${person[1]}]`);
console.log(`Coordinates: [${coordinates[0]}, ${coordinates[1]}]`);

import { user, address, company } from "./01-basic-types/objects";
console.log(`User: ${user.name} (${user.email})`);
console.log(`Address: ${address.city}, ${address.country}`);
console.log(`Company: ${company.name} with ${company.employees} employees`);

// ============================================
// 2. Interfaces
// ============================================
console.log("\n2. INTERFACES");
console.log("-".repeat(50));

import { user1, product, calculator, myDog } from "./02-interfaces/basic-interfaces";
console.log(`User: ${user1.name} (${user1.email})`);
console.log(`Product: ${product.name} - $${product.price}`);
console.log(`Calculator: 5 + 3 = ${calculator.add(5, 3)}`);
console.log(`Dog: ${myDog.name} is a ${myDog.breed}`);
myDog.bark();

// ============================================
// 3. Functions
// ============================================
console.log("\n3. FUNCTIONS");
console.log("-".repeat(50));

import {
  add,
  multiply,
  greet,
  power,
  sum,
  format,
  createMultiplier,
} from "./03-functions/function-types";
console.log(`Add: 10 + 5 = ${add(10, 5)}`);
console.log(`Multiply: 10 * 5 = ${multiply(10, 5)}`);
console.log(`Greet: ${greet("Alice")}`);
console.log(`Power: 2^3 = ${power(2, 3)}`);
console.log(`Sum: 1 + 2 + 3 + 4 + 5 = ${sum(1, 2, 3, 4, 5)}`);
console.log(`Format string: ${format("hello")}`);
console.log(`Format number: ${format(42.567)}`);
console.log(`Format boolean: ${format(true)}`);

const double = createMultiplier(2);
console.log(`Double 5: ${double(5)}`);

// ============================================
// 4. Classes
// ============================================
console.log("\n4. CLASSES");
console.log("-".repeat(50));

import {
  Person,
  BankAccount,
  Dog,
  Rectangle,
  Circle,
  MathUtils,
  Temperature,
} from "./04-classes/basic-classes";

const alice = new Person("Alice", 30);
console.log(alice.greet());

const account = new BankAccount("12345", "Bob", 1000);
account.deposit(500);
console.log(`Bank Account Balance: $${account.getBalance()}`);

const buddy = new Dog("Buddy", "Golden Retriever");
buddy.makeSound();

const rect = new Rectangle(10, 5);
console.log(`Rectangle Area: ${rect.calculateArea()}`);
console.log(`Rectangle Perimeter: ${rect.calculatePerimeter()}`);

const circle = new Circle(5);
console.log(`Circle Area: ${circle.calculateArea().toFixed(2)}`);
console.log(`Circle Perimeter: ${circle.calculatePerimeter().toFixed(2)}`);

console.log(`Math Utils - Circle Area (r=5): ${MathUtils.calculateCircleArea(5).toFixed(2)}`);
console.log(`Math Utils - Max(10, 20, 5, 15): ${MathUtils.max(10, 20, 5, 15)}`);

const temp = new Temperature();
temp.celsius = 25;
console.log(`Temperature: ${temp.celsius}°C = ${temp.fahrenheit.toFixed(1)}°F`);

// ============================================
// 5. Generics
// ============================================
console.log("\n5. GENERICS");
console.log("-".repeat(50));

import {
  identity,
  getFirstElement,
  pair,
  Stack,
  Container,
} from "./05-generics/generic-types";

console.log(`Identity (number): ${identity(42)}`);
console.log(`Identity (string): ${identity("Hello")}`);
console.log(`First element: ${getFirstElement([10, 20, 30])}`);
console.log(`Pair: [${pair("one", 1).join(", ")}]`);

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(`Stack size: ${stack.size()}`);
console.log(`Stack peek: ${stack.peek()}`);
console.log(`Stack pop: ${stack.pop()}`);

const container = new Container("TypeScript");
console.log(`Container value: ${container.value}`);

// ============================================
// 6. Utility Types
// ============================================
console.log("\n6. UTILITY TYPES");
console.log("-".repeat(50));

import { updateUser, preview, roles, pages } from "./06-utility-types/utility-types";
console.log(`Partial User: ${updateUser.name || "No name"}`);
console.log(`User Preview: ${preview.name} (ID: ${preview.id})`);
console.log(`Roles: Admin = ${roles.admin}, Editor = ${roles.editor}`);
console.log(`Pages: ${pages.home.title} at ${pages.home.url}`);

// ============================================
// 7. Enums
// ============================================
console.log("\n7. ENUMS");
console.log("-".repeat(50));

import { Direction, Status, Color, move, LogLevel } from "./07-enums/enums";

console.log(`Direction Up: ${Direction.Up}`);
console.log(`Status In Progress: ${Status.InProgress}`);
console.log(`Color Blue: ${Color.Blue}`);
console.log(move(Direction.Right));
console.log(`Log Level Error: ${LogLevel.Error}`);

// ============================================
// Summary
// ============================================
console.log("\n" + "=".repeat(50));
console.log("TypeScript Fundamentals Complete!");
console.log("=".repeat(50));
console.log("\nTopics covered:");
console.log("✓ Basic Types (primitives, arrays, tuples, objects)");
console.log("✓ Interfaces");
console.log("✓ Functions (parameters, return types, overloads)");
console.log("✓ Classes (properties, methods, inheritance, abstract)");
console.log("✓ Generics (functions, classes, constraints)");
console.log("✓ Utility Types (Partial, Required, Pick, Omit, etc.)");
console.log("✓ Enums (numeric, string, const)");
console.log("=".repeat(50) + "\n");
