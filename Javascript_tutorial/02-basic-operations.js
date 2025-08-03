// 02 - Basic Operations and Math
// This script demonstrates arithmetic operations and basic math functions

console.log("=== Basic Operations and Math ===");

// Arithmetic Operators
let a = 10;
let b = 3;

console.log("--- Arithmetic Operators ---");
console.log(`a = ${a}, b = ${b}`);
console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Remainder/Modulo (a % b):", a % b);
console.log("Exponentiation (a ** b):", a ** b);

// Assignment Operators
console.log("\n--- Assignment Operators ---");
let x = 5;
console.log("Initial x:", x);

x += 3; // Same as x = x + 3
console.log("After x += 3:", x);

x -= 2; // Same as x = x - 2
console.log("After x -= 2:", x);

x *= 2; // Same as x = x * 2
console.log("After x *= 2:", x);

x /= 3; // Same as x = x / 3
console.log("After x /= 3:", x);

// Increment and Decrement
console.log("\n--- Increment and Decrement ---");
let counter = 0;
console.log("Initial counter:", counter);

counter++; // Post-increment
console.log("After counter++:", counter);

++counter; // Pre-increment
console.log("After ++counter:", counter);

counter--; // Post-decrement
console.log("After counter--:", counter);

--counter; // Pre-decrement
console.log("After --counter:", counter);

// Math Object
console.log("\n--- Math Object ---");
let num = -15.7;

console.log("Original number:", num);
console.log("Absolute value:", Math.abs(num));
console.log("Rounded:", Math.round(num));
console.log("Rounded up:", Math.ceil(num));
console.log("Rounded down:", Math.floor(num));
console.log("Square root of 16:", Math.sqrt(16));
console.log("2 to the power of 8:", Math.pow(2, 8));
console.log("Random number (0-1):", Math.random());
console.log("Random number (1-10):", Math.floor(Math.random() * 10) + 1);
console.log("PI:", Math.PI);
console.log("E:", Math.E);

// String concatenation with numbers
console.log("\n--- String and Number Operations ---");
let firstName = "John";
let age = 25;

console.log("String + String:", firstName + " Doe");
console.log("String + Number:", firstName + " is " + age + " years old");
console.log("Number + Number + String:", 5 + 3 + " apples"); // Result: "8 apples"
console.log("String + Number + Number:", "I have " + 5 + 3 + " items"); // Result: "I have 53 items"
console.log("Number conversion:", Number("123") + 5); // Convert string to number
