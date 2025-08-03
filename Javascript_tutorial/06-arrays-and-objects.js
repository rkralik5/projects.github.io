// 06 - Arrays and Objects
// This script demonstrates working with arrays and objects

console.log("=== Arrays and Objects ===");

// Creating Arrays
console.log("--- Creating Arrays ---");
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true, null];
let emptyArray = [];

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Mixed array:", mixed);
console.log("Empty array:", emptyArray);

// Array Properties and Methods
console.log("\n--- Array Properties and Methods ---");
console.log("Fruits length:", fruits.length);
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Adding elements
fruits.push("grape"); // Add to end
console.log("After push:", fruits);

fruits.unshift("strawberry"); // Add to beginning
console.log("After unshift:", fruits);

// Removing elements
let lastFruit = fruits.pop(); // Remove from end
console.log("Removed:", lastFruit);
console.log("After pop:", fruits);

let firstFruit = fruits.shift(); // Remove from beginning
console.log("Removed:", firstFruit);
console.log("After shift:", fruits);

// Finding elements
console.log("\n--- Finding Elements ---");
console.log("Index of 'banana':", fruits.indexOf("banana"));
console.log("Includes 'apple':", fruits.includes("apple"));
console.log("Includes 'kiwi':", fruits.includes("kiwi"));

// Array methods
console.log("\n--- Array Methods ---");
let originalNumbers = [1, 2, 3, 4, 5];
console.log("Original numbers:", originalNumbers);

// Join - convert array to string
console.log("Joined with '-':", originalNumbers.join("-"));

// Slice - extract portion of array (doesn't modify original)
console.log("Slice 1-3:", originalNumbers.slice(1, 3));
console.log("Original after slice:", originalNumbers);

// Splice - remove/add elements (modifies original)
let numbersForSplice = [1, 2, 3, 4, 5];
let removed = numbersForSplice.splice(2, 2, "a", "b"); // Remove 2 elements at index 2, add "a", "b"
console.log("Removed elements:", removed);
console.log("Array after splice:", numbersForSplice);

// Reverse and Sort
console.log("\n--- Reverse and Sort ---");
let letters = ["c", "a", "b", "d"];
console.log("Original letters:", letters);
console.log("Sorted:", [...letters].sort()); // Using spread to avoid modifying original
console.log("Reversed:", [...letters].reverse());

let nums = [10, 5, 20, 1];
console.log("Number sort (default):", [...nums].sort()); // Sorts as strings!
console.log("Number sort (numeric):", [...nums].sort((a, b) => a - b));

// Creating Objects
console.log("\n--- Creating Objects ---");
let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    isEmployed: true
};

console.log("Person object:", person);

// Accessing object properties
console.log("\n--- Accessing Object Properties ---");
console.log("Name (dot notation):", person.name);
console.log("Age (bracket notation):", person["age"]);

// Dynamic property access
let propertyName = "city";
console.log("Dynamic property access:", person[propertyName]);

// Adding and modifying properties
console.log("\n--- Modifying Objects ---");
person.email = "john@email.com"; // Add new property
person.age = 31; // Modify existing property
console.log("Modified person:", person);

// Deleting properties
delete person.isEmployed;
console.log("After deletion:", person);

// Object methods
console.log("\n--- Object Methods ---");
let calculator = {
    brand: "Scientific Calculator",
    add: function(a, b) {
        return a + b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    // Arrow function in object (be careful with 'this')
    getInfo: () => {
        return "This is a calculator";
    }
};

console.log("Calculator brand:", calculator.brand);
console.log("5 + 3 =", calculator.add(5, 3));
console.log("4 * 6 =", calculator.multiply(4, 6));
console.log("Info:", calculator.getInfo());

// Object with this keyword
console.log("\n--- Object with 'this' keyword ---");
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    getFullName: function() {
        return `${this.brand} ${this.model} ${this.year}`;
    },
    honk: function() {
        return `${this.brand} says: Beep beep!`;
    }
};

console.log("Car full name:", car.getFullName());
console.log("Honk:", car.honk());

// Nested objects and arrays
console.log("\n--- Nested Objects and Arrays ---");
let school = {
    name: "JavaScript High School",
    students: [
        {
            name: "Alice",
            grade: 85,
            subjects: ["Math", "Science", "English"]
        },
        {
            name: "Bob",
            grade: 92,
            subjects: ["History", "Art", "Math"]
        }
    ],
    getAverageGrade: function() {
        let total = 0;
        for (let student of this.students) {
            total += student.grade;
        }
        return total / this.students.length;
    }
};

console.log("School:", school.name);
console.log("First student:", school.students[0].name);
console.log("First student's subjects:", school.students[0].subjects);
console.log("Average grade:", school.getAverageGrade());

// Object destructuring (modern JavaScript)
console.log("\n--- Object Destructuring ---");
let {name, age, city} = person;
console.log("Destructured name:", name);
console.log("Destructured age:", age);
console.log("Destructured city:", city);

// Array destructuring
console.log("\n--- Array Destructuring ---");
let colors = ["red", "green", "blue"];
let [first, second, third] = colors;
console.log("First color:", first);
console.log("Second color:", second);
console.log("Third color:", third);

// Object.keys, Object.values, Object.entries
console.log("\n--- Object Static Methods ---");
let testObject = {a: 1, b: 2, c: 3};
console.log("Object keys:", Object.keys(testObject));
console.log("Object values:", Object.values(testObject));
console.log("Object entries:", Object.entries(testObject));

// Array of objects - common pattern
console.log("\n--- Array of Objects ---");
let products = [
    {name: "Laptop", price: 999, category: "Electronics"},
    {name: "Book", price: 15, category: "Education"},
    {name: "Shirt", price: 25, category: "Clothing"}
];

console.log("All products:");
products.forEach(product => {
    console.log(`${product.name}: $${product.price} (${product.category})`);
});

// Filter expensive products
let expensiveProducts = products.filter(product => product.price > 20);
console.log("Expensive products:", expensiveProducts);
