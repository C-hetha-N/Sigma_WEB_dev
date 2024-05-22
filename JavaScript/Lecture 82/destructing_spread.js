//Spread syntax =>  ...XYZ

(async function main() {
    let x,y = [1,2]
    console.log(x,y);
    [x,y] = [1,2]
    console.log(x,y);
    [x,y] = [1,2,3]
    console.log(x,y);
    [x,y, ...rest] = [1,2,3,4,5]
    console.log(x,y,rest);
})()

// -------------------------------------
let obj = {
    a: 11,
    b: 13,
    c: 15,
    d: 17
}


let {a, b} = obj
console.log("{a, b} " + a, b);
let c,d = obj
console.log("c,d " + c, d);
// ---------------------------------------

function sum(x, y, z) {
    return x + y + z;
}

let arr = [9, 8, 7]
console.log(arr[0] + arr[1] + arr[2]);
console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr));    

