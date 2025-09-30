# this-is-ts

A comprehensive guide to TypeScript fundamentals with practical examples and explanations.

## 📚 Overview

This project covers all the essential TypeScript concepts you need to master, organized into clear, well-documented examples.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Epiq122/this-is-ts.git

# Navigate to the project directory
cd this-is-ts

# Install dependencies
npm install
```

### Running the Examples

```bash
# Build the TypeScript code
npm run build

# Run the compiled examples
npm start

# Clean build artifacts
npm run clean
```

## 📖 Topics Covered

### 1. Basic Types (`src/01-basic-types/`)

- **Primitives** (`primitives.ts`)
  - string, number, boolean
  - undefined, null
  - any, unknown
  - void, never

- **Arrays and Tuples** (`arrays-tuples.ts`)
  - Array syntax and operations
  - Tuples with fixed types
  - Readonly arrays
  - Optional tuple elements

- **Objects** (`objects.ts`)
  - Object type annotations
  - Optional and readonly properties
  - Index signatures
  - Intersection types
  - Type aliases

### 2. Interfaces (`src/02-interfaces/`)

- **Basic Interfaces** (`basic-interfaces.ts`)
  - Interface declaration
  - Optional and readonly properties
  - Function types in interfaces
  - Index signatures
  - Extending interfaces
  - Multiple interface extension
  - Interface vs Type Alias
  - Declaration merging

### 3. Functions (`src/03-functions/`)

- **Function Types** (`function-types.ts`)
  - Typed parameters and return types
  - Optional and default parameters
  - Rest parameters
  - Function type expressions
  - Function overloads
  - Call signatures
  - Generic functions
  - Higher-order functions
  - Function returning functions

### 4. Classes (`src/04-classes/`)

- **Basic Classes** (`basic-classes.ts`)
  - Class declaration and constructors
  - Access modifiers (public, private, protected)
  - Readonly properties
  - Parameter properties
  - Inheritance with extends
  - Abstract classes
  - Static members
  - Getters and setters
  - Implementing interfaces

### 5. Generics (`src/05-generics/`)

- **Generic Types** (`generic-types.ts`)
  - Generic functions
  - Generic interfaces
  - Generic classes
  - Generic constraints
  - Using type parameters in constraints
  - Multiple type parameters
  - Generic type aliases
  - Default type parameters
  - Conditional types
  - Mapped types

### 6. Utility Types (`src/06-utility-types/`)

- **Built-in Utility Types** (`utility-types.ts`)
  - `Partial<T>` - Make all properties optional
  - `Required<T>` - Make all properties required
  - `Readonly<T>` - Make all properties readonly
  - `Pick<T, K>` - Pick specific properties
  - `Omit<T, K>` - Omit specific properties
  - `Record<K, T>` - Create object type with keys and value type
  - `Exclude<T, U>` - Exclude types from union
  - `Extract<T, U>` - Extract types from union
  - `NonNullable<T>` - Remove null and undefined
  - `ReturnType<T>` - Get function return type
  - `Parameters<T>` - Get function parameter types
  - `InstanceType<T>` - Get instance type of constructor
  - `Awaited<T>` - Unwrap Promise type

### 7. Enums (`src/07-enums/`)

- **Enum Types** (`enums.ts`)
  - Numeric enums
  - String enums
  - Const enums
  - Computed enum members
  - Reverse mapping
  - Enums in functions
  - Alternatives to enums (union types, as const)

## 📁 Project Structure

```
this-is-ts/
├── src/
│   ├── 01-basic-types/
│   │   ├── primitives.ts
│   │   ├── arrays-tuples.ts
│   │   └── objects.ts
│   ├── 02-interfaces/
│   │   └── basic-interfaces.ts
│   ├── 03-functions/
│   │   └── function-types.ts
│   ├── 04-classes/
│   │   └── basic-classes.ts
│   ├── 05-generics/
│   │   └── generic-types.ts
│   ├── 06-utility-types/
│   │   └── utility-types.ts
│   ├── 07-enums/
│   │   └── enums.ts
│   └── index.ts
├── dist/               # Compiled JavaScript (generated)
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Learning Path

1. Start with **Basic Types** to understand TypeScript's type system
2. Learn **Interfaces** to define object shapes and contracts
3. Master **Functions** with proper typing and advanced patterns
4. Explore **Classes** for object-oriented programming
5. Understand **Generics** for reusable, type-safe code
6. Utilize **Utility Types** for common type transformations
7. Use **Enums** when you need named constants

## 💡 Best Practices

- Always enable strict mode in `tsconfig.json`
- Use interfaces for object shapes that might be extended
- Use type aliases for unions, intersections, and complex types
- Prefer `unknown` over `any` when type is truly unknown
- Use const enums for better performance when values won't be used at runtime
- Leverage utility types instead of writing custom type transformations
- Use generics when you need type flexibility with type safety

## 🔧 TypeScript Configuration

The project uses a strict TypeScript configuration (`tsconfig.json`) with:

- Strict type checking enabled
- Source maps for debugging
- Declaration files for type definitions
- ES2020 target and CommonJS modules
- Organized source and output directories

## 📝 License

ISC

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📚 Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
