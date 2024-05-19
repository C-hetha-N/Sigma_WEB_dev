console.log("JavaScript is intializing");
console.log("JavScript is intializing");

setTimeout(() => {
    console.log("Hey! I am inside the setTimeout");
}, 0);

setTimeout(() => {
    console.log("Hey! I am inside the setTimeout 2");
}, 0);

console.log("The End");