//Exercise 4
//Basic arithmetic calculator using functions

//Define two numbers
const num1 = 20;
const num2 = 2;

function sum(a, b) { //Function for sum
    return a + b;
}

function subtract(a, b) { //Function for subtraction
    return a - b;
}

function multiply(a, b) { //Function for multiplication
    return a * b;
}

function divide(a, b) { //Function for division
    return a / b;
}

//Save results
let sum = add(num1, num2);
let sub = subtract(num1, num2);
let mult = multiply(num1, num2);
let div = divide(num1, num2);

//Print results
console.log(`The result of ${num1} + ${num2} is ${sum}`);
console.log(`The result of ${num1} - ${num2} is ${sub}`);
console.log(`The result of ${num1} * ${num2} is ${mult}`);
console.log(`The result of ${num1} / ${num2} is ${div}`);