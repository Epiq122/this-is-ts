// ============================================
// INTERFACES IN TYPESCRIPT
// ============================================

// Basic interface
interface User {
  id: number;
  name: string;
  email: string;
}

const user1: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

// Optional properties
interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
}

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
};

// Readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 5; // Error! Cannot modify readonly property

// Function types in interfaces
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

// Index signatures
interface StringDictionary {
  [key: string]: string;
}

const dict: StringDictionary = {
  greeting: "Hello",
  farewell: "Goodbye",
};

// Extending interfaces
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

const myDog: Dog = {
  name: "Buddy",
  age: 5,
  breed: "Golden Retriever",
  bark() {
    console.log("Woof!");
  },
};

// Multiple interface extension
interface Mammal {
  warmBlooded: boolean;
}

interface Pet {
  owner: string;
}

interface Cat extends Mammal, Pet {
  name: string;
  meow(): void;
}

const myCat: Cat = {
  name: "Whiskers",
  warmBlooded: true,
  owner: "John",
  meow() {
    console.log("Meow!");
  },
};

// Interface vs Type Alias
// Interfaces can be reopened (declaration merging)
interface Window {
  title: string;
}

interface Window {
  version: number;
}

const window: Window = {
  title: "My Window",
  version: 1,
};

export {
  user1,
  product,
  calculator,
  myDog,
  myCat,
};
