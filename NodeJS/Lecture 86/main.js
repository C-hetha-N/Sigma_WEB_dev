// const { createServer } = require('node:http');

/*
import http from "http"

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/


/* import {a, b, d} from "./mymodules.js"
console.log(a, b, d);

import obj from "./mymodules.js"
console.log(obj);

import cn from "./mymodules.js"
console.log(cn); */

// import cn from "./mymodules.js"
// console.log(cn);

/* (function(exports, requires, module, __dirname, __filename) {
  // Module code actually lives here
}) */


  const a = require("./mymodules2.js");
  console.log(a, __dirname, __filename); 