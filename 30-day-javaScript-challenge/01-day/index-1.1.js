var num= 10;
console.log(num);

let s= "sandeep";
console.log(s);

const bool= true;
console.log(bool);

// check typeof 

var n=10;
let string = "sandeep";
const boolean= false;
const colleges={
    name: 'IET',
    est: 2010,
    nirf_rank: true,
    loc: ()=>{
        console.log('india');
    }
}
const arr=["sandeep", 'kuldeep', 10, 20, true, {name:'sandeep', age: 24}]
console.log(typeof(n)); // number
console.log(typeof(string)); // string 
console.log(typeof(boolean)); // boolean 
console.log(typeof(colleges)); // object
console.log(typeof arr); // "object"
/*
Arrays in JavaScript are special types of objects 
that are used to store ordered collections of values.
 */
console.log(Array.isArray(arr)); // true

//reassign
 let k = 'kajol';
 console.log(k)
 k=12;
 console.log(k)

 const p='kapoor';
 console.log(p)
    //    p=12; // TypeError: Assignment to constant variable.
    console.log(p)



