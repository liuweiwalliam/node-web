const a =  100;
const fs = require('fs')
function test() {
	console.warn( a);

}
fs.readFile('./data.json',(err,data)=>{
	console.warn(err, data.toString());
})
module.exports.fn = test;
