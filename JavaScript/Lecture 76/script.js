// async function getData() {
//     // stimulate getting data from the server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(450);
//         }, 3500);
//     }
//     )
// }

// Settele means resolve and reject
// resolve means promise settled successfully
// reject means promise NOT settled successfully

async function getData() {
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json();
    console.log(data);
    return 54;
}
// data.then((v) => {
//     console.log(data);

//     console.log("Process data");
// }
// )
async function main() {
    console.log("Loading modules");

    console.log("Do something else");

    console.log("Load data");
    let data = await getData();

    console.log(data);

    console.log("Process data");
}

main()




