// 05 - Functions
// This script demonstrates different ways to create and use functions

console.log("=== Functions ===");

// Function Declaration
console.log("--- Function Declaration ---");
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));
console.log(greet("Bob"));

// Function with multiple parameters
function add(a, b) {
    return a + b;
}

console.log(`5 + 3 = ${add(5, 3)}`);

// Function with default parameters
function greetWithDefault(name = "World") {
    return `Hello, ${name}!`;
}

console.log(greetWithDefault()); // Uses default
console.log(greetWithDefault("Charlie")); // Uses provided name

// Function Expression
console.log("\n--- Function Expression ---");
const multiply = function(a, b) {
    return a * b;
};

console.log(`4 * 6 = ${multiply(4, 6)}`);

// Arrow Functions (Modern JavaScript)
console.log("\n--- Arrow Functions ---");
const subtract = (a, b) => {
    return a - b;
};

console.log(`10 - 4 = ${subtract(10, 4)}`);

// Shorter arrow function (single expression)
const square = x => x * x;
console.log(`Square of 7 = ${square(7)}`);

// Arrow function with no parameters
const sayHello = () => "Hello from arrow function!";
console.log(sayHello());

// Functions with no return value (undefined)
console.log("\n--- Functions without return ---");
function logMessage(message) {
    console.log(`Log: ${message}`);
    // No return statement - returns undefined
}

let result = logMessage("This is a test");
console.log("Function result:", result); // undefined

// Local vs Global Scope
console.log("\n--- Variable Scope ---");
let globalVar = "I'm global";

function scopeExample() {
    let localVar = "I'm local";
    console.log("Inside function - global:", globalVar);
    console.log("Inside function - local:", localVar);
}

scopeExample();
console.log("Outside function - global:", globalVar);
// console.log("Outside function - local:", localVar); // This would cause an error

// Function with multiple operations
console.log("\n--- Complex Function Example ---");
function calculateGrade(score) {
    let grade;
    let message;
    
    if (score >= 90) {
        grade = "A";
        message = "Excellent!";
    } else if (score >= 80) {
        grade = "B";
        message = "Good job!";
    } else if (score >= 70) {
        grade = "C";
        message = "Fair";
    } else if (score >= 60) {
        grade = "D";
        message = "Needs improvement";
    } else {
        grade = "F";
        message = "Failed";
    }
    
    return {
        score: score,
        grade: grade,
        message: message
    };
}

let studentResult = calculateGrade(85);
console.log("Student result:", studentResult);
console.log(`Score: ${studentResult.score}, Grade: ${studentResult.grade}, ${studentResult.message}`);

// Function that calls another function
console.log("\n--- Functions calling other functions ---");
function formatTemperature(celsius) {
    let fahrenheit = celsiusToFahrenheit(celsius);
    return `${celsius}°C = ${fahrenheit}°F`;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(formatTemperature(25));
console.log(formatTemperature(0));

// Higher-order functions (functions that take other functions as parameters)
console.log("\n--- Higher-order Functions ---");
function operate(a, b, operation) {
    return operation(a, b);
}

function addition(x, y) {
    return x + y;
}

function multiplication(x, y) {
    return x * y;
}

console.log("Using addition:", operate(5, 3, addition));
console.log("Using multiplication:", operate(5, 3, multiplication));

// Anonymous function passed directly
console.log("Using anonymous function:", operate(10, 2, function(x, y) {
    return x / y;
}));

// Recursive function (function that calls itself)
console.log("\n--- Recursive Function ---");
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("5! =", factorial(5)); // 5 * 4 * 3 * 2 * 1 = 120

// IIFE - Immediately Invoked Function Expression
console.log("\n--- IIFE (Immediately Invoked Function Expression) ---");
(function() {
    let privateVar = "This is private";
    console.log("IIFE executed:", privateVar);
})();

// Function with rest parameters
console.log("\n--- Rest Parameters ---");
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log("Sum of 1, 2, 3:", sum(1, 2, 3));
console.log("Sum of 1, 2, 3, 4, 5:", sum(1, 2, 3, 4, 5));
