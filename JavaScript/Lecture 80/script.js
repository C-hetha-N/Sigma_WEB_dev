class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is called...");
    }
    eats() {
        console.log("It was eating");
    }
    jumps() {
        console.log("It was jumping");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("He is Lion");
    }

    jumps() {
        super.jumps()
        console.log("It was jumping and Roaring");
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);

console.log("l instanceof Lion : ",l instanceof Lion);
console.log("l instanceof Animal : ",l instanceof Animal);
console.log("a instanceof Lion : ",a instanceof Lion);
