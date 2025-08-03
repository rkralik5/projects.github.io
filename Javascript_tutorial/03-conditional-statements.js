// 03 - Conditional Statements
// This script demonstrates if/else statements and comparison operators

console.log("=== Conditional Statements ===");

// Comparison Operators
console.log("--- Comparison Operators ---");
let score = 85;
let passing = 60;

console.log(`Score: ${score}, Passing: ${passing}`);
console.log("score > passing:", score > passing);
console.log("score < passing:", score < passing);
console.log("score >= passing:", score >= passing);
console.log("score <= passing:", score <= passing);
console.log("score == passing:", score == passing);
console.log("score != passing:", score != passing);

// Strict equality vs loose equality
console.log("\n--- Strict vs Loose Equality ---");
let numString = "5";
let numNumber = 5;

console.log(`"${numString}" == ${numNumber}:`, numString == numNumber);   // true (loose)
console.log(`"${numString}" === ${numNumber}:`, numString === numNumber); // false (strict)
console.log(`"${numString}" != ${numNumber}:`, numString != numNumber);   // false
console.log(`"${numString}" !== ${numNumber}:`, numString !== numNumber); // true

// Basic if/else statements
console.log("\n--- Basic If/Else ---");
let temperature = 22;

if (temperature > 25) {
    console.log("It's hot outside!");
} else if (temperature > 15) {
    console.log("The weather is nice.");
} else {
    console.log("It's cold outside.");
}

// Grade calculator example
console.log("\n--- Grade Calculator ---");
let studentScore = 87;
let grade;

if (studentScore >= 90) {
    grade = "A";
} else if (studentScore >= 80) {
    grade = "B";
} else if (studentScore >= 70) {
    grade = "C";
} else if (studentScore >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log(`Score: ${studentScore}, Grade: ${grade}`);

// Logical Operators
console.log("\n--- Logical Operators ---");
let isWeekend = true;
let isSunny = false;
let hasTime = true;

console.log("Is Weekend:", isWeekend);
console.log("Is Sunny:", isSunny);
console.log("Has Time:", hasTime);

// AND operator (&&)
if (isWeekend && isSunny) {
    console.log("Perfect day for a picnic!");
} else {
    console.log("Maybe stay inside today.");
}

// OR operator (||)
if (isWeekend || hasTime) {
    console.log("You can relax!");
} else {
    console.log("Time to work!");
}

// NOT operator (!)
if (!isSunny) {
    console.log("Don't forget your umbrella!");
}

// Ternary Operator (shorthand if/else)
console.log("\n--- Ternary Operator ---");
let age = 20;
let canVote = age >= 18 ? "Yes, can vote" : "No, too young to vote";
console.log(`Age: ${age}, Can vote: ${canVote}`);

// Another ternary example
let balance = 50;
let purchaseAmount = 30;
let message = balance >= purchaseAmount ? "Purchase approved" : "Insufficient funds";
console.log(`Balance: $${balance}, Purchase: $${purchaseAmount}, Result: ${message}`);

// Switch statement
console.log("\n--- Switch Statement ---");
let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(`Day ${dayOfWeek} is ${dayName}`);
