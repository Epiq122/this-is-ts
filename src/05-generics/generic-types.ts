// ============================================
// GENERICS IN TYPESCRIPT
// ============================================

// Basic generic function
function identity<T>(arg: T): T {
  return arg;
}

const numberIdentity = identity<number>(42);
const stringIdentity = identity<string>("Hello");
const boolIdentity = identity(true); // Type inference

// Generic arrays
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNumber = getFirstElement([1, 2, 3]); // number | undefined
const firstName = getFirstElement(["Alice", "Bob"]); // string | undefined

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const numStrPair = pair(1, "one");
const boolObjPair = pair(true, { key: "value" });

// Generic interfaces
interface Box<T> {
  value: T;
  getValue(): T;
  setValue(value: T): void;
}

class SimpleBox<T> implements Box<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }
}

const numberBox = new SimpleBox<number>(42);
const stringBox = new SimpleBox<string>("Hello");

// Generic classes
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");

// Generic constraints
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(`Length: ${arg.length}`);
  return arg;
}

logLength("Hello"); // string has length
logLength([1, 2, 3]); // array has length
// logLength(42); // Error! number doesn't have length

// Using type parameters in constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 30, email: "alice@example.com" };
const userName = getProperty(user, "name");
// const invalid = getProperty(user, "invalid"); // Error!

// Generic type aliases
type Result<T> = { success: true; data: T } | { success: false; error: string };

function fetchData<T>(url: string): Result<T> {
  // Simulated fetch
  if (url) {
    return { success: true, data: {} as T };
  }
  return { success: false, error: "Invalid URL" };
}

// Generic utility type
type Nullable<T> = T | null;

const nullableString: Nullable<string> = "Hello";
const nullValue: Nullable<number> = null;

// Generic with default type parameters
class Container<T = string> {
  constructor(public value: T) {}
}

const defaultContainer = new Container("default"); // Container<string>
const numberContainer = new Container<number>(42); // Container<number>

// Conditional types with generics
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

// Generic mapped types
type ReadonlyType<T> = {
  readonly [K in keyof T]: T[K];
};

interface Person {
  name: string;
  age: number;
}

type ReadonlyPerson = ReadonlyType<Person>;
// All properties are now readonly

// Generic function with multiple constraints
interface Comparable {
  compareTo(other: unknown): number;
}

interface Printable {
  print(): void;
}

function processItem<T extends Comparable & Printable>(item: T): void {
  item.print();
  // item.compareTo(something);
}

export {
  identity,
  getFirstElement,
  pair,
  SimpleBox,
  Stack,
  logLength,
  getProperty,
  fetchData,
  Container,
};
