
console.log('------------------------------------------')
const Obj={
    a:1,
    b:2,
    getA(){
        console.log(this.a);
        return this;
    },
    getB(){
        console.log(this.b);
    }
}
Obj.getA().getB();

// Chaining Issue: When you write Obj.getA().getB(), the following happens:

// Obj.getA() executes first. It prints this.a (which is 1), but getA itself returns undefined.
// Then, undefined.getB() is attempted, which causes an error because undefined does not have a method getB().
// To fix this and make the chaining work as intended, you would need getA() to return this 
console.log('------------------------------------------')
// forEach:  method is used to execute a provided function once for each array element
// Add print method to Array prototype
Array.prototype.print = function() {
    let result = '';
    for (let i = 0; i < this.length; i++) {
        result += this[i];
        if (i < this.length - 1) {
            result += ', ';
        }
    }
    console.log(result);
};

// Example usage
[1, 2, 3, 5, 667, 12].print(); 

console.log('------------------------------------------')

let ku= 'sandeep';
ku= 12;
console.log(ku);
var  k = true;
k= 'ajay';
console.log(k);
const xc= "sandeep";
// xc= 1223; // TypeError: Assignment to constant variable.
console.log(xc);

console.log('------------------------------------------')

{
    var dog=' desi';
    let cat= 'meow';
    const bat= 'shop';   
}
console.log(dog);
// console.log(cat); // refernce error
// console.log(bat); // refernce error


// clone a object 
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
console.log(clone.a.b.c.d);