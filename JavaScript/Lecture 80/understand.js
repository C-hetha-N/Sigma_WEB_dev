let obj = {
    a: 1,
    b: "Rocky"
}

console.log(obj);

let animal = {
    eats: true
}

let rabbit = {
    jump: true
}

rabbit.__proto__ = animal;
