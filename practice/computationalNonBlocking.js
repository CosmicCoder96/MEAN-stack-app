var child_process = require('child_process');
console.log("App starts");
// require('./fibonacci.js');
var newProcess = child_process.spawn('node',['fibonacci.js'],{stdio:'inherit	'});
console.log("App ends");
