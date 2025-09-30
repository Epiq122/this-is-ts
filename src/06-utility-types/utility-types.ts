// ============================================
// UTILITY TYPES IN TYPESCRIPT
// ============================================

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  address?: string;
}

// ============================================
// Partial<T> - Makes all properties optional
// ============================================
type PartialUser = Partial<User>;

const updateUser: PartialUser = {
  name: "Alice",
  // Other properties are optional
};

// ============================================
// Required<T> - Makes all properties required
// ============================================
type RequiredUser = Required<User>;

const completeUser: RequiredUser = {
  id: 1,
  name: "Bob",
  email: "bob@example.com",
  age: 30,
  address: "123 Main St", // Now required
};

// ============================================
// Readonly<T> - Makes all properties readonly
// ============================================
type ReadonlyUser = Readonly<User>;

const immutableUser: ReadonlyUser = {
  id: 1,
  name: "Charlie",
  email: "charlie@example.com",
  age: 25,
};
// immutableUser.name = "Dave"; // Error! Cannot modify readonly

// ============================================
// Pick<T, K> - Pick specific properties
// ============================================
type UserPreview = Pick<User, "id" | "name">;

const preview: UserPreview = {
  id: 1,
  name: "Alice",
};

// ============================================
// Omit<T, K> - Omit specific properties
// ============================================
type UserWithoutEmail = Omit<User, "email">;

const userNoEmail: UserWithoutEmail = {
  id: 1,
  name: "Bob",
  age: 30,
};

// ============================================
// Record<K, T> - Create object type with specific keys and value type
// ============================================
type UserRoles = Record<string, boolean>;

const roles: UserRoles = {
  admin: true,
  editor: false,
  viewer: true,
};

type PageInfo = Record<"home" | "about" | "contact", { title: string; url: string }>;

const pages: PageInfo = {
  home: { title: "Home", url: "/" },
  about: { title: "About", url: "/about" },
  contact: { title: "Contact", url: "/contact" },
};

// ============================================
// Exclude<T, U> - Exclude types from union
// ============================================
type AllTypes = string | number | boolean;
type StringAndNumber = Exclude<AllTypes, boolean>;

const value1: StringAndNumber = "hello";
const value2: StringAndNumber = 42;
// const value3: StringAndNumber = true; // Error!

// ============================================
// Extract<T, U> - Extract types from union
// ============================================
type ExtractedTypes = Extract<AllTypes, string | boolean>;

const extracted1: ExtractedTypes = "hello";
const extracted2: ExtractedTypes = true;
// const extracted3: ExtractedTypes = 42; // Error!

// ============================================
// NonNullable<T> - Remove null and undefined
// ============================================
type NullableString = string | null | undefined;
type NonNullString = NonNullable<NullableString>;

const str: NonNullString = "Hello";
// const nullStr: NonNullString = null; // Error!

// ============================================
// ReturnType<T> - Get function return type
// ============================================
function getUser() {
  return {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  };
}

type UserReturnType = ReturnType<typeof getUser>;

const returnedUser: UserReturnType = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};

// ============================================
// Parameters<T> - Get function parameter types as tuple
// ============================================
function createUser(name: string, age: number, email: string) {
  return { name, age, email };
}

type CreateUserParams = Parameters<typeof createUser>;

const params: CreateUserParams = ["Alice", 30, "alice@example.com"];
createUser(...params);

// ============================================
// InstanceType<T> - Get instance type of constructor
// ============================================
class Person {
  constructor(public name: string, public age: number) {}
}

type PersonInstance = InstanceType<typeof Person>;

const person: PersonInstance = new Person("Alice", 30);

// ============================================
// Awaited<T> - Unwrap Promise type
// ============================================
type AwaitedNumber = Awaited<Promise<number>>;
type AwaitedString = Awaited<Promise<Promise<string>>>;

async function fetchNumber(): Promise<number> {
  return 42;
}

// ============================================
// Custom utility types combining built-ins
// ============================================
type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>>;
type PartialUserName = PartialPick<User, "name" | "email">;

type RequiredOmit<T, K extends keyof T> = Required<Omit<T, K>>;
type RequiredUserNoAddress = RequiredOmit<User, "address">;

export {
  updateUser,
  completeUser,
  immutableUser,
  preview,
  roles,
  pages,
  returnedUser,
  params,
  person,
};
