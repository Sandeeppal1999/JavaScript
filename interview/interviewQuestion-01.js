// Q:1 Transform object into array that contain only value
// const x={
//     a:1,
//     b:2,
// }
// Returns an array of values of the enumerable properties of an object
// console.log(Object.values(x));

//Q2: Reverse a string
// const reverseString= (str) => str.split('').reverse().join('');
// console.log(reverseString("ABCD123 456EFG"));

// Q3: 
// console.log('------------------------------------------')
// const Obj={
//     a:1,
//     b:2,
//     getA(){
//         console.log(this.a);
//         return this; // solution 
//     },
//     getB(){
//         console.log(this.b);
//     }
// }
// Obj.getA().getB();

// Chaining Issue: When you write Obj.getA().getB(), the following happens:

// Obj.getA() executes first. It prints this.a (which is 1), but getA itself returns undefined.
// Then, undefined.getB() is attempted, which causes an error because undefined does not have a method getB().
// To fix this and make the chaining work as intended, you would need getA() to return this 

// Q4: 
// Array.prototype.print = function() {
//     let result = '';
//     for (let i = 0; i < this.length; i++) {
//         result += this[i];
//         if (i < this.length - 1) {
//             result += ', ';
//         }
//     }
//     console.log(result);
// };

// Example usage
// [1, 2, 3, 5, 667, 12].print(); 

//Q5:  clone object deep and shallow 

// shallow clone 
/*
const obj={
    a:{
        b:{
            c:{
                d: 'sandeep'
            }
        }
    }
}
const clone = Object.assign({},obj);
clone.a.b.c.d= 'kuldeep';
console.log(clone.a.b.c.d);
console.log(obj.a.b.c.d);

// Deep clone 
const deepClone= JSON.parse(JSON.stringify(obj));
deepClone.a.b.c.d= 'sandhya';
console.log(deepClone.a.b.c.d);
*/

//Q6: 
// const a= [1,2,344,12,34,4];
// const b= [11,22,44,232,442,343,343,3,67,90,8.89,76,88,0,8,10];
// const c= a.concat(b).sort((a,b)=>a - b);
// console.log(c);


// Q:7
 const objec1={
    x:1,
    getX(){
        const inner= function(){
            console.log(this.x);
            /*  inside the inner function,
             this refers to the global object (window in browsers) in non-strict mode,
              or undefined in strict mode.
              */
        }.bind(this);
        inner();
    }
 }
 objec1.getX();
/*
   1:  Using an Arrow Function:

Arrow functions do not have their own this context; they inherit this from the enclosing lexical context.

javascript

const objec1 = {
    x: 1,
    getX() {
        const inner = () => {
            console.log(this.x);
        }
        inner();
    }
}

objec1.getX(); // Output: 1

    2: Storing this in a Variable:

Store the value of this in a variable that can be accessed inside the inner function.

javascript

const objec1 = {
    x: 1,
    getX() {
        const self = this;
        const inner = function() {
            console.log(self.x);
        }
        inner();
    }
}

objec1.getX(); // Output: 1

    3: Using bind:

Explicitly bind this to the inner function.

javascript

const objec1 = {
    x: 1,
    getX() {
        const inner = function() {
            console.log(this.x);
        }.bind(this);
        inner();
    }
}

objec1.getX(); // Output: 1

*/

const reverseString= (str) => str.split('').reverse().join('');
console.log(reverseString("ABCD123 456EFG"));
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
  console.log(key); // logs "a", "b", "c"
  console.log(object[key]); // logs 1, 2, 3
}
