"use strict"
console.log("Function in JS");
// function statment  also Knows as function decalartion

Hello(); // Run successfully
// hi();  //function.js:6 Uncaught ReferenceError: Cannot access 'hi' before initialization

function Hello(){
    console.log("Hello India");
}
 
// function Expression
 let hi= function(){
     console.log("Hello TFT");
 }
 // Anonymous Function -function which have no name 
// function () {

// }//Uncaught SyntaxError: Function statements require a function name 

// Difference between function para meter and agrument
// param1, param2 are paramater that are passed to a function.
function add(param1,param2){ 
    return param1+param2;
}
console.log(add(123,345)); // these are agrument 

//first class function
function xyz(){
    return function(){console.log("Return to project")};
}
console.log(xyz());


//Standard function 
const obj={
      count:10,
    dosomethinglater(){
        setTimeout(function(){
            this.count ++;
           // console.log(this.count);

        },4000);
    }
}
obj.dosomethinglater(); //NAN

//Arrow function

const object={
    count:10,
    dosomething(){
        setTimeout(()=>{
            this.count++;
            console.log(this.count);

        },3000)
    }
}