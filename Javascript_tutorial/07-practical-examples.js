// 07 - Practical Examples
// This script contains practical examples combining all the concepts

console.log("=== Practical JavaScript Examples ===");

// Example 1: Simple Calculator
console.log("--- Example 1: Simple Calculator ---");
function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        default:
            return "Error: Invalid operator";
    }
}

console.log("10 + 5 =", calculator(10, '+', 5));
console.log("10 - 3 =", calculator(10, '-', 3));
console.log("4 * 6 =", calculator(4, '*', 6));
console.log("15 / 3 =", calculator(15, '/', 3));
console.log("10 / 0 =", calculator(10, '/', 0));

// Example 2: Grade Book System
console.log("\n--- Example 2: Grade Book System ---");
let gradeBook = {
    studentName: "Alice Johnson",
    subjects: [
        {name: "Math", scores: [85, 92, 78, 96]},
        {name: "Science", scores: [88, 85, 90, 87]},
        {name: "English", scores: [92, 89, 94, 91]}
    ],
    
    getSubjectAverage: function(subjectName) {
        let subject = this.subjects.find(s => s.name === subjectName);
        if (!subject) return "Subject not found";
        
        let sum = subject.scores.reduce((total, score) => total + score, 0);
        return Math.round(sum / subject.scores.length);
    },
    
    getOverallAverage: function() {
        let totalPoints = 0;
        let totalScores = 0;
        
        this.subjects.forEach(subject => {
            subject.scores.forEach(score => {
                totalPoints += score;
                totalScores++;
            });
        });
        
        return Math.round(totalPoints / totalScores);
    },
    
    getLetterGrade: function(average) {
        if (average >= 90) return 'A';
        if (average >= 80) return 'B';
        if (average >= 70) return 'C';
        if (average >= 60) return 'D';
        return 'F';
    },
    
    generateReport: function() {
        console.log(`\n=== Report for ${this.studentName} ===`);
        
        this.subjects.forEach(subject => {
            let avg = this.getSubjectAverage(subject.name);
            let grade = this.getLetterGrade(avg);
            console.log(`${subject.name}: ${avg}% (${grade})`);
        });
        
        let overall = this.getOverallAverage();
        let overallGrade = this.getLetterGrade(overall);
        console.log(`Overall Average: ${overall}% (${overallGrade})`);
    }
};

gradeBook.generateReport();

// Example 3: Shopping Cart
console.log("\n--- Example 3: Shopping Cart ---");
function ShoppingCart() {
    this.items = [];
    
    this.addItem = function(name, price, quantity = 1) {
        // Check if item already exists
        let existingItem = this.items.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                name: name,
                price: price,
                quantity: quantity
            });
        }
        console.log(`Added ${quantity} ${name}(s) to cart`);
    };
    
    this.removeItem = function(name) {
        let index = this.items.findIndex(item => item.name === name);
        if (index !== -1) {
            let removed = this.items.splice(index, 1)[0];
            console.log(`Removed ${removed.name} from cart`);
        } else {
            console.log(`${name} not found in cart`);
        }
    };
    
    this.updateQuantity = function(name, newQuantity) {
        let item = this.items.find(item => item.name === name);
        if (item) {
            item.quantity = newQuantity;
            console.log(`Updated ${name} quantity to ${newQuantity}`);
        } else {
            console.log(`${name} not found in cart`);
        }
    };
    
    this.getTotal = function() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    };
    
    this.displayCart = function() {
        console.log("\n=== Shopping Cart ===");
        if (this.items.length === 0) {
            console.log("Cart is empty");
            return;
        }
        
        this.items.forEach(item => {
            let itemTotal = item.price * item.quantity;
            console.log(`${item.name}: $${item.price} x ${item.quantity} = $${itemTotal.toFixed(2)}`);
        });
        
        console.log(`Total: $${this.getTotal().toFixed(2)}`);
    };
}

// Using the shopping cart
let cart = new ShoppingCart();
cart.addItem("Laptop", 999.99);
cart.addItem("Mouse", 25.50, 2);
cart.addItem("Keyboard", 75.00);
cart.addItem("Mouse", 25.50); // Adding another mouse
cart.displayCart();

cart.updateQuantity("Laptop", 2);
cart.removeItem("Keyboard");
cart.displayCart();

// Example 4: Simple Todo List
console.log("\n--- Example 4: Todo List ---");
let todoList = {
    tasks: [],
    nextId: 1,
    
    addTask: function(description, priority = "medium") {
        let task = {
            id: this.nextId++,
            description: description,
            completed: false,
            priority: priority,
            createdAt: new Date().toLocaleString()
        };
        
        this.tasks.push(task);
        console.log(`Added task: "${description}"`);
    },
    
    completeTask: function(id) {
        let task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            console.log(`Completed task: "${task.description}"`);
        } else {
            console.log(`Task with ID ${id} not found`);
        }
    },
    
    removeTask: function(id) {
        let index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            let removed = this.tasks.splice(index, 1)[0];
            console.log(`Removed task: "${removed.description}"`);
        } else {
            console.log(`Task with ID ${id} not found`);
        }
    },
    
    displayTasks: function(filter = "all") {
        console.log(`\n=== Todo List (${filter}) ===`);
        
        let filteredTasks = this.tasks;
        
        if (filter === "completed") {
            filteredTasks = this.tasks.filter(t => t.completed);
        } else if (filter === "pending") {
            filteredTasks = this.tasks.filter(t => !t.completed);
        }
        
        if (filteredTasks.length === 0) {
            console.log("No tasks found");
            return;
        }
        
        filteredTasks.forEach(task => {
            let status = task.completed ? "✓" : "○";
            console.log(`${status} [${task.id}] ${task.description} (${task.priority})`);
        });
    },
    
    getStats: function() {
        let total = this.tasks.length;
        let completed = this.tasks.filter(t => t.completed).length;
        let pending = total - completed;
        
        console.log(`\n=== Stats ===`);
        console.log(`Total tasks: ${total}`);
        console.log(`Completed: ${completed}`);
        console.log(`Pending: ${pending}`);
    }
};

// Using the todo list
todoList.addTask("Learn JavaScript basics", "high");
todoList.addTask("Practice coding exercises", "medium");
todoList.addTask("Build a small project", "high");
todoList.addTask("Read documentation", "low");

todoList.displayTasks();
todoList.completeTask(1);
todoList.completeTask(3);
todoList.displayTasks("completed");
todoList.displayTasks("pending");
todoList.getStats();

// Example 5: Number Guessing Game
console.log("\n--- Example 5: Number Guessing Game (Simulation) ---");
function NumberGuessingGame(min = 1, max = 100) {
    this.min = min;
    this.max = max;
    this.secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    this.attempts = 0;
    this.maxAttempts = Math.ceil(Math.log2(max - min + 1)) + 2; // Binary search + 2
    this.gameOver = false;
    
    this.guess = function(number) {
        if (this.gameOver) {
            return "Game is over! Start a new game.";
        }
        
        this.attempts++;
        
        if (number === this.secretNumber) {
            this.gameOver = true;
            return `Congratulations! You guessed ${this.secretNumber} in ${this.attempts} attempts!`;
        } else if (this.attempts >= this.maxAttempts) {
            this.gameOver = true;
            return `Game over! The number was ${this.secretNumber}. Better luck next time!`;
        } else if (number < this.secretNumber) {
            return `Too low! You have ${this.maxAttempts - this.attempts} attempts left.`;
        } else {
            return `Too high! You have ${this.maxAttempts - this.attempts} attempts left.`;
        }
    };
    
    this.reset = function() {
        this.secretNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        this.attempts = 0;
        this.gameOver = false;
        return "New game started!";
    };
}

// Simulate a game
let game = new NumberGuessingGame(1, 20);
console.log("Starting number guessing game (1-20):");

// Simulate some guesses
let testGuesses = [10, 15, 12, 13];
testGuesses.forEach((guess, index) => {
    console.log(`Guess ${index + 1}: ${guess}`);
    console.log(game.guess(guess));
    console.log("");
});
