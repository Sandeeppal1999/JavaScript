console.log("Data type, var, let, const!........");

// Let
//console.log(a);   // refrence error -- let and const are hoisted but its memory is allocated at other place (script)than window which cannot be accessed before initialisation.

let a = 10;
console.log("let a valye is :" + a)

//const -- we need declare and intialze at same time , and we cannot reassign value in const, but we can reassign in let
const x = 120;
//  x=123;
console.log("const value  " + x);
// var  -- var store in window and var have global scope 
console.log("var value is " + b); // hosited in window
var b = 10;

// Block scope- all variable function which are accessible from block are called block scope...
console.log(" Block scope ..............................");

var i = 100;
let j = 200;
const k = 300;

{
    var i = 10;
    let j = 20;
    const k = 30;
}
console.log("value  var i:" + i);
console.log("value  let j:" + j);
console.log("value  const k:" + k);

