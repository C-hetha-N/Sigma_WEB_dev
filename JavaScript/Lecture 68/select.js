// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

document.getElementById("redbox").style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "Yellow";

document.querySelectorAll(".box").forEach(e=>{
    e.style.color = "orange"
})

let x = document.getElementsByTagName("div");
console.log(x);

console.log(x[1].matches("#redbox"));
console.log(x[2].matches("#redbox"));
console.log(x[3].matches("#redbox"));

console.log(x[4].closest("#redbox"));
console.log(x[4].closest(".container"));

let c = document.querySelector(".container");
console.log(c.contains(x[2]));
console.log(c.contains(x[0]));
console.log(c.contains(document.querySelector("body")));


