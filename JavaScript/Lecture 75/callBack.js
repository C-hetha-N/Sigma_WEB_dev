const fn = () => {
  console.log("Nothing")
}

const callbacks = (arg) => {
    console.log(arg)
    fn()
}

let loadScript = (src, callbacks) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callbacks("Harry", fn)
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callbacks);
