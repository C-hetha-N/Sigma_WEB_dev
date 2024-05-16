console.log("Script is intialized")
let con = document.querySelector(".container")

for (let i = 0; i < 5; i++) {
    let ran1 = Math.random()
    let ran2 = Math.random()

    if (ran1 <= 0.2) {
        con.children[i].style.color = "white"
    }
    else if (ran1 <= 0.4) {
        con.children[i].style.color = "black"
    }
    else if (ran1 <= 0.6) {
        con.children[i].style.color = "gray"
    }
    else if (ran1 <= 0.8) {
        con.children[i].style.color = "aqua"
    }
    else {
        con.children[i].style.color = "pink"
    }

    if (ran2 <= 0.2) {
        con.children[i].style.backgroundColor = "red"
    }
    else if (ran2 <= 0.4) {
        con.children[i].style.backgroundColor = "purple"
    }
    else if (ran2 <= 0.6) {
        con.children[i].style.backgroundColor = "yellow"
    }
    else if (ran2 <= 0.8) {
        con.children[i].style.backgroundColor = "green"
    }
    else {
        con.children[i].style.backgroundColor = "blue"
    }
}