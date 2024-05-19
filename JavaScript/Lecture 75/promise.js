console.log("This is promise");

let prom1 = new Promise((resolve, reject) => {
    let x = Math.random();
    if (x < 0.5) {
        reject("Random number is not supporting")
    }
    else {
        setTimeout(() => {
            console.log("I am done")
            resolve("Bye!")
        }, 1000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    x = Math.random();
    if (x < 0.5) {
        reject("Random number is not supporting 2")
    }
    else {
        setTimeout(() => {
            console.log("I am done 2")
            resolve("Bye! 2")
        }, 2000);
    }
})

let p = Promise.any([prom1, prom2])
p.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})
