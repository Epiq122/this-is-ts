// ============================================
// ENUMS IN TYPESCRIPT
// ============================================

// Numeric enums (default - starts at 0)
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const currentDirection: Direction = Direction.Up;
console.log(currentDirection); // 0

// Numeric enums with custom values
enum Status {
  Pending = 1,
  InProgress = 2,
  Completed = 3,
  Failed = 4,
}

const taskStatus: Status = Status.InProgress;

// String enums
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

const favoriteColor: Color = Color.Blue;
console.log(favoriteColor); // "BLUE"

// Heterogeneous enums (mixed string and numeric - not recommended)
enum MixedEnum {
  No = 0,
  Yes = "YES",
}

// Computed enum members
enum FileAccess {
  None = 0,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
}

console.log(FileAccess.Read); // 2
console.log(FileAccess.Write); // 4
console.log(FileAccess.ReadWrite); // 6

// Const enums (more performant - inlined at compile time)
const enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500,
}

const successStatus: HttpStatus = HttpStatus.OK;

// Reverse mapping (only for numeric enums)
enum Role {
  Admin,
  User,
  Guest,
}

const roleValue: Role = Role.Admin;
const roleName: string = Role[roleValue]; // "Admin"

console.log(Role.Admin); // 0
console.log(Role[0]); // "Admin"

// Enum as object keys
enum LogLevel {
  Error = "ERROR",
  Warning = "WARNING",
  Info = "INFO",
  Debug = "DEBUG",
}

type LogLevelConfig = Record<LogLevel, { color: string; priority: number }>;

const logConfig: LogLevelConfig = {
  [LogLevel.Error]: { color: "red", priority: 1 },
  [LogLevel.Warning]: { color: "yellow", priority: 2 },
  [LogLevel.Info]: { color: "blue", priority: 3 },
  [LogLevel.Debug]: { color: "gray", priority: 4 },
};

// Using enums in functions
function move(direction: Direction): string {
  switch (direction) {
    case Direction.Up:
      return "Moving up";
    case Direction.Down:
      return "Moving down";
    case Direction.Left:
      return "Moving left";
    case Direction.Right:
      return "Moving right";
    default:
      const exhaustiveCheck: never = direction;
      return exhaustiveCheck;
  }
}

// Ambient enums (declare)
declare enum ExternalEnum {
  A,
  B,
  C,
}

// Union of string literals as alternative to string enums
type ColorUnion = "red" | "green" | "blue";

const myColor: ColorUnion = "red";

// Using as const for literal objects (alternative to enums)
const DIRECTIONS = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
} as const;

type DirectionType = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];

const dir: DirectionType = DIRECTIONS.UP;

// Enum utilities
function getEnumKeys<T extends object>(enumObj: T): (keyof T)[] {
  return Object.keys(enumObj).filter((key) => isNaN(Number(key))) as (keyof T)[];
}

function getEnumValues<T extends object>(enumObj: T): T[keyof T][] {
  return getEnumKeys(enumObj).map((key) => enumObj[key]);
}

const colorKeys = getEnumKeys(Color);
const colorValues = getEnumValues(Color);

console.log(colorKeys); // ["Red", "Green", "Blue"]
console.log(colorValues); // ["RED", "GREEN", "BLUE"]

export {
  Direction,
  Status,
  Color,
  HttpStatus,
  LogLevel,
  move,
  logConfig,
  DIRECTIONS,
};
