// ============================================
// ARRAYS AND TUPLES IN TYPESCRIPT
// ============================================

// Arrays - Two syntax options
const numbers: number[] = [1, 2, 3, 4, 5];
const names: Array<string> = ["Alice", "Bob", "Charlie"];

// Multi-dimensional arrays
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Union type arrays
const mixed: (string | number)[] = [1, "two", 3, "four"];

// Readonly arrays
const readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); // Error! Cannot modify readonly array

// Tuples - Fixed length arrays with specific types
const person: [string, number] = ["John", 30];
const coordinates: [number, number] = [40.7128, -74.0060];

// Named tuples (TS 4.0+)
const employee: [name: string, age: number, isActive: boolean] = ["Jane", 28, true];

// Optional tuple elements
const optionalTuple: [string, number?] = ["Hello"];

// Rest elements in tuples
const restTuple: [string, ...number[]] = ["scores", 95, 87, 92, 88];

// Readonly tuples
const readonlyTuple: readonly [string, number] = ["immutable", 42];

// Destructuring tuples
const [firstName, userAge] = person;
console.log(`${firstName} is ${userAge} years old`);

export {
  numbers,
  names,
  matrix,
  person,
  coordinates,
  employee,
};
