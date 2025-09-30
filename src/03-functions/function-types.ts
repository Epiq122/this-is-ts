// ============================================
// FUNCTIONS IN TYPESCRIPT
// ============================================

// Basic function with typed parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Optional parameters
function greet(name: string, greeting?: string): string {
  return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}

// Default parameters
function power(base: number, exponent: number = 2): number {
  return Math.pow(base, exponent);
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// Function type expressions
type MathOperation = (a: number, b: number) => number;

const divide: MathOperation = (a, b) => a / b;
const subtract: MathOperation = (a, b) => a - b;

// Function overloads
function format(value: string): string;
function format(value: number): string;
function format(value: boolean): string;
function format(value: string | number | boolean): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toFixed(2);
  } else {
    return value ? "YES" : "NO";
  }
}

// Call signatures (for functions with properties)
type DescribableFunction = {
  description: string;
  (input: string): string;
};

function createFunction(): DescribableFunction {
  const fn = (input: string) => input.toUpperCase();
  fn.description = "Converts string to uppercase";
  return fn as DescribableFunction;
}

// Void return type
function logInfo(message: string): void {
  console.log(`[INFO] ${message}`);
}

// Never return type (for functions that throw or infinite loops)
function throwError(message: string): never {
  throw new Error(message);
}

// Generic functions (covered more in generics section)
function identity<T>(arg: T): T {
  return arg;
}

// Constraining generics in functions
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Alice", age: 30 };
const personName = getProperty(person, "name"); // string
const personAge = getProperty(person, "age"); // number

// Higher-order functions
function applyOperation(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}

const result = applyOperation(10, 5, add);

// Function returning function
function createMultiplier(factor: number): (value: number) => number {
  return (value: number) => value * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

export {
  add,
  multiply,
  greet,
  power,
  sum,
  format,
  identity,
  getProperty,
  applyOperation,
  createMultiplier,
};
