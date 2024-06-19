/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
// Objects can be created using object literals, the Object constructor, or by using classes

// Object Literals:
let person = {
    name:'sandeep',
    age: 25,
    greet:function(){
        console.log(`hello ${this.name}`);
    }
}
console.log(person);
console.log(person.age);

//Using the Object Constructor:

let User= new Object();
User.name='sonam';
User.age=23;
User.greet = function(){
    console.log(`hello ${this.name}`);
}
console.log(User);
console.log(User.age);


// Using Classes (ES6):

class Person{
    constructor(name, id){
        this.name=name;
        this.id=id;
    }
    greet(){
        console.log(`hello ${this.name}`);
    }
    }
let per = new Person('sanhya', '123');
console.log(per.greet());
console.log(per.id);
