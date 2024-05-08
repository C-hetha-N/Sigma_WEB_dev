console.log("Hello, I am conditional tutorial")

let age = 18;
// let grace = 3;

// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age % grace);

// if (age === 18) {
//     console.log("you can drive");
// }
// else {
//     console.log("you can't drive");
// }

if (age > 0) {
    console.log("Age is valid");
}
else if (age > 0 && age < 6 ) {
    console.log("you are a baby");
}
else if (age >= 6 && age < 12 ) {
    console.log("you are a kid");
}
else if (age >= 12 && age < 18 ) {
    console.log("you are a teenager");
}
else if (age >= 18) {
    console.log("you are a adult");
}
else {
    console.log("Invalid age");
}


// let ans = ("3" == 5);
// console.log(ans);
// let ans1 = ("3" == 3);
// console.log(ans1);
// let ans2 = ("3" === 3);
// console.log(ans2);
// let ans3 = ("3" === "3");
// console.log(ans3);

/*
    I am a
    multi-line
    comment
*/