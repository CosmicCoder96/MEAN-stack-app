console.log("App starts");
require('./fibonacci.js');
console.log("App ends");

//alternate approach to prevent the delay.
// var fs = require('fs');
// console.log("App starts");

// fs.readFile('./fibonacci.js',function(err,file){console.log("Computation completed");})
// console.log("App ends");
