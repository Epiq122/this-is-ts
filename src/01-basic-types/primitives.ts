// ============================================
// PRIMITIVE TYPES IN TYPESCRIPT
// ============================================

// String
const userName: string = "John Doe";
const greeting: string = `Hello, ${userName}!`;

// Number
const age: number = 25;
const price: number = 19.99;
const hexValue: number = 0xf00d;
const binaryValue: number = 0b1010;

// Boolean
const isActive: boolean = true;
const isCompleted: boolean = false;

// Undefined and Null
const notDefined: undefined = undefined;
const empty: null = null;

// Any - Use sparingly!
let dynamicValue: any = "Hello";
dynamicValue = 42;
dynamicValue = true;

// Unknown - Safer alternative to any
let unknownValue: unknown = "Hello";
// unknownValue.toUpperCase(); // Error! Must check type first
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}

// Void - typically used for functions that don't return
function logMessage(message: string): void {
  console.log(message);
}

// Never - for functions that never return
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

export {
  userName,
  greeting,
  age,
  price,
  isActive,
  logMessage,
};
