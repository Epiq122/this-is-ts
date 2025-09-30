// ============================================
// CLASSES IN TYPESCRIPT
// ============================================

// Basic class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const person = new Person("Alice", 30);

// Access modifiers
class BankAccount {
  public accountNumber: string;
  private balance: number;
  protected owner: string;

  constructor(accountNumber: string, owner: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }

  private calculateInterest(): number {
    return this.balance * 0.05;
  }
}

// Readonly properties
class Car {
  readonly vin: string;
  model: string;

  constructor(vin: string, model: string) {
    this.vin = vin;
    this.model = model;
  }
}

const car = new Car("ABC123", "Tesla Model 3");
// car.vin = "XYZ789"; // Error! Cannot modify readonly property

// Parameter properties (shorthand)
class Product {
  constructor(
    public id: number,
    public name: string,
    private price: number
  ) {}

  getPrice(): number {
    return this.price;
  }
}

// Inheritance
class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }

  makeSound(): void {
    console.log("Woof! Woof!");
  }

  fetch(): void {
    console.log(`${this.name} is fetching!`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");

// Abstract classes
abstract class Shape {
  constructor(public name: string) {}

  abstract calculateArea(): number;
  abstract calculatePerimeter(): number;

  describe(): string {
    return `This is a ${this.name}`;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super("Rectangle");
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super("Circle");
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Static members
class MathUtils {
  static PI: number = 3.14159;

  static calculateCircleArea(radius: number): number {
    return MathUtils.PI * radius ** 2;
  }

  static max(...numbers: number[]): number {
    return Math.max(...numbers);
  }
}

// Getters and setters
class Temperature {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero!");
    }
    this._celsius = value;
  }

  get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(value: number) {
    this._celsius = ((value - 32) * 5) / 9;
  }
}

// Implementing interfaces
interface Printable {
  print(): void;
}

interface Serializable {
  serialize(): string;
}

class Document implements Printable, Serializable {
  constructor(public content: string) {}

  print(): void {
    console.log(this.content);
  }

  serialize(): string {
    return JSON.stringify({ content: this.content });
  }
}

export {
  Person,
  BankAccount,
  Car,
  Product,
  Dog,
  Rectangle,
  Circle,
  MathUtils,
  Temperature,
  Document,
};
