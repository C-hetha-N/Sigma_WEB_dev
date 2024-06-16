console.log("Hello World");
var slugify = require('slugify')

let a = slugify('some string')
console.log(a);  //some-string

// If u prefer something other than '-' as separator
let b = slugify('some s`~!@#$%^&*()tring', '/')
console.log(b);