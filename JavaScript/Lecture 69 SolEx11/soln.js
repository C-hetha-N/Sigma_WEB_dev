let num = 5;
let fact = 1;

// for (let i=num; i>0; i--) {
//     if (num > 0) {
//         fact = fact * i;
//     } 
//     console.log(fact);
// }

let numbers = [];
for (let i = num; i > 0; i--) {
    numbers.push(i);
}

const red = (a, b) => {
    return a * b;
}
console.log(numbers.reduce(red));

