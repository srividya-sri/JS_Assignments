// Write  difference b/w var , let and const

/*var - to declare global variable and variables declared with 
var can be accessed globally. we can re-declare and update the 
varaibales using var keyword */

var greet = "hey hi";
var time = 4;

if (time > 3) {
    var greet = "say Hello instead"; 
}

console.log(greet) 


/*let - it is a blocked scope. A varible declare with let in a block 
it can be accessed only within that block */

let greeting = "say Hi";
let times = 4;

if (times > 3) {
     let hello = "say Hello instead";
     console.log(hello);// "say Hello instead"
 }
console.log(hello) // hello is not defined

/*const --- variables declared with const can not be changed */




