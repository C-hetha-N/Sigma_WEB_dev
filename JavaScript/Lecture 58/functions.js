function nice(name) {
    console.log("Hey! " + name + " you are nice");
    console.log("Hey! " + name + " you are good");
    console.log("Hey! " + name + " your tshirt is nice");
    console.log("Hey! " + name + " your course also good");
}

// nice("harry");

function sum(a, b, c = 3) {
    console.log(a, b, c);
    return a + b + c;
}

result1 = sum(8, 5);
result2 = sum(6, 5);
result3 = sum(3, 12, 1);
result4 = sum(3);  //NaN

console.log("\n" + result1);
console.log(result2);
console.log(result3);
console.log(result4 + "\n");

const func1 = (x) => {
    console.log("I am a Arrow function", x);
}
func1(56);
func1(35);
func1(86);