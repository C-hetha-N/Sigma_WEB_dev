let a = parseFloat(prompt("Enter first number : "));
let b = parseFloat(prompt("Enter second number : "));
let x = Math.random();

console.log("a: " + a);
console.log("b: " + b);

console.log("\nOperations:");
console.log("+ for addition");
console.log("- for subtraction");
console.log("* for multiplication");
console.log("/ for division");
console.log("** for exponentiation");
console.log("% for modulus\n");
let op = prompt("Enter the operation: ");

console.log("\nInput: " + op);

console.log("Faulty " + (x <= 0.1));

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**"
}

if (x <= 0.1) {
    op = obj[op];
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`);
}
else {
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`);
}

console.log("The result is " + `${eval(`${a} ${op} ${b}`)}`);