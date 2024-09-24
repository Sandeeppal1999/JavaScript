//Converting a String to an Integer in JavaScript
const stringToInteger = str => +str === +str ? +str : 0;
console.log(stringToInteger('123'));
console.log('******************************************')

const hello= str=> `hello ${str}`;
console.log(hello('sandeep'));

console.log('******************************************')
const array= [10,20,10,20,30,10,40,50,20,40,60,70,10];
const countOccurence= (arr)=>arr.reduce((acc, val)=> (acc[val]= (acc[val]|| 0),+1,acc),{})

const countOccurrences = (arr) => arr.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {});