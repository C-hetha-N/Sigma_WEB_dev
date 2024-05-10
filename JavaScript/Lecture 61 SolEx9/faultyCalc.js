/*
    Create a faulty calculator using JavaScript

    This faulty calculator does following:
    1.It takes two numbers as input from the user
    2.It performs wrong Operations as follows:
        + ---> -
        * ---> +
        - ---> /
        / ---> **

        It performs wrong operations 10% of the times
*/

let a = parseFloat(prompt("Enter first number : "));
let b = parseFloat(prompt("Enter second number : "));
let x = Math.random();
let ans;

console.log("a: " + a);
console.log("b: " + b);

console.log("\nOperations:");
console.log("+ for addition");
console.log("- for subtraction");
console.log("* for multiplication");
console.log("/ for division");
console.log("** for exponentiation");
console.log("% for modulus\n");
let op = prompt("For calculation enter operations as following : ");

console.log(op);

console.log("Faulty " + (x <= 0.1));

if (x <= 0.1) {
    if (op == "+") {
        ans = a - b;
    }
    else if (op == "-") {
        ans = a / b;
    }
    else if (op == "*") {
        ans = a + b;
    }
    else if (op == "/") {
        ans = a ** b;
    }
    else if (op == "**") {
        ans = a ** b;
    }
    else if (op == "%") {
        ans = a % b;
    }
    else {
        ans = "Invalid Operator";
    }
}
else {
    if (op == "+") {
        ans = a + b;
    }
    else if (op == "-") {
        ans = a - b;
    }
    else if (op == "*") {
        ans = a * b;
    }
    else if (op == "/") {
        ans = a / b;
    }
    else if (op == "**") {
        ans = a ** b;
    }
    else if (op == "%") {
        ans = a % b;
    }
    else {
        ans = "Invalid Operator";
    }
}

alert("The result is " + ans);
console.log("The result is " + ans);