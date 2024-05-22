// //Immediately Invoked Function Expressions (IIFE)

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 2000);
    })
}

// async function main() {
//     let a = await sleep();
//     let b = await sleep();
// }
// console.log(main());

(async function main() {
    let a = await sleep();
    let b = await sleep();
})()
// __________________________________________________________________________________
