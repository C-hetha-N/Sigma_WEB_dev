console.log("Welcome to JS")

let a = 6;
a = a + 1;
var b = 5;
var c = "Sigma";
var _a = "Raja";
// var 9a = "Rocky"; --?     error

{
    let a = 66;
    console.log("a is " + a)
}
console.log("Goble a is " + a)

// console.log(a + b + 8)
// console.log(typeof a, typeof b, typeof c)

const d = 3;
// d = d + 1; -- error

// var vs let

let x = "Sigma";
let y = 65;
let z = 3.57;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

let o = {
    name : "Rohit",
    "Job code" : 4568,
    is_handsome : true
}

console.log(o)
o.salary = "20lakhs"
console.log(o)
o.salary = "25lakhs"
console.log(o)
