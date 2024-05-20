let a = prompt("Enter first number");
let b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry This not allowed")
}

let sum = parseInt(a) + parseInt(b);
alert("The sum is " + sum);
console.log("The sum is", sum);

function main() {
    let x = 2;
    try {
        console.log("The sum to the power of X is", sum ** x);
        return true;
    }
    catch (error) {
        console.log("Bro, an Error occurred...");
        // console.log("Error Name:", error.name);
        // console.log("Error Message:", error.message);
        // console.log("Error Stack:", error.stack);
        return false;
    }
    finally {
        console.log("Files are being colsed and db connection is being colsed");
    }
}

console.log(main());