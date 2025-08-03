// 04 - Loops
// This script demonstrates different types of loops in JavaScript

console.log("=== Loops ===");

// For Loop
console.log("--- For Loop ---");
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}

console.log("\nCounting backwards from 5 to 1:");
for (let i = 5; i >= 1; i--) {
    console.log(`Countdown: ${i}`);
}

console.log("\nCounting by twos:");
for (let i = 0; i <= 10; i += 2) {
    console.log(`Even number: ${i}`);
}

// While Loop
console.log("\n--- While Loop ---");
let counter = 0;
console.log("While loop counting to 3:");
while (counter < 3) {
    console.log(`While counter: ${counter}`);
    counter++;
}

// Do-While Loop
console.log("\n--- Do-While Loop ---");
let num = 5;
console.log("Do-while loop (executes at least once):");
do {
    console.log(`Do-while num: ${num}`);
    num++;
} while (num < 5); // This condition is false, but it still executes once

// Looping through Arrays
console.log("\n--- Looping through Arrays ---");
let fruits = ["apple", "banana", "orange", "grape"];

console.log("Using for loop with array:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Index ${i}: ${fruits[i]}`);
}

console.log("\nUsing for...of loop (modern way):");
for (let fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

console.log("\nUsing for...in loop (gets indices):");
for (let index in fruits) {
    console.log(`Index ${index}: ${fruits[index]}`);
}

// Looping through Objects
console.log("\n--- Looping through Objects ---");
let person = {
    name: "Alice",
    age: 25,
    city: "New York",
    job: "Developer"
};

console.log("Using for...in loop with objects:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Break and Continue
console.log("\n--- Break and Continue ---");
console.log("Using break (stop at 3):");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log(`Breaking at ${i}`);
        break;
    }
    console.log(`Number: ${i}`);
}

console.log("\nUsing continue (skip 3):");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log(`Skipping ${i}`);
        continue;
    }
    console.log(`Number: ${i}`);
}

// Nested Loops
console.log("\n--- Nested Loops ---");
console.log("Multiplication table (3x3):");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("---");
}

// Practical Example: Finding Prime Numbers
console.log("\n--- Practical Example: Prime Numbers 1-20 ---");
for (let num = 2; num <= 20; num++) {
    let isPrime = true;
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        console.log(`${num} is prime`);
    }
}

// Array methods that use loops internally
console.log("\n--- Array Methods (Alternative to manual loops) ---");
let numbers = [1, 2, 3, 4, 5];

console.log("Original array:", numbers);

// forEach - executes function for each element
console.log("Using forEach:");
numbers.forEach(function(number, index) {
    console.log(`Index ${index}: ${number}`);
});

// map - creates new array with transformed elements
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log("Doubled array:", doubled);

// filter - creates new array with elements that pass a test
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log("Even numbers:", evenNumbers);
