let str ='sandeep is a good boy and good teacher and good doctor';

let word= str.split(' ');
let s = new Set();
console.log(word);
word.forEach((e)=>{
    s.add(e);
})
console.log(s);