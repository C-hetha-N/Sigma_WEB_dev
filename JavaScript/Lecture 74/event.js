let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    // alert("I am Clicked. yayy!")
    document.querySelector(".box").innerHTML = "<b>Yayy! You are clicked</b>"
})

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Enjoy your Double click</b>"
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by right click")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})
