# Do javascript have classes?
~ Yes javascript does have classes, this feture introduced in es6,
~ javascript is primarily prototype based language, and its class are primarily synatatic sugar over existing prototype-based inheritance mechanism 
~ it provide a more faimilar syntac for developer coming from class based lanagugaes like java/c++


# oops is a programing pradims 
# object:  collection of properties and method 

# part of oops
- object literal
- constructor function
- Prototypes
-class
- Instance (new, this)

## pillar of oops 
1- Abstraction
2- Encapsulation
3- Inheritance
4- Polymorphism


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/