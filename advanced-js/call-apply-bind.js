const person = {
    firstName: 'sandeep',
    lastName: 'pal',
    age: 25,
    country: 'India'
}
const person2 = {
    firstName: 'ananya',
    lastName: 'pal',
    age: 25,
    country: 'nepal'
}
const person3 = {
    firstName: 'sandhya',
    lastName: 'pal',
    age: 25,
    country: 'USA'
}
let info = function(city, contactDetails){
    console.log(`${this.firstName} ${this.lastName}, this side, I am ${this.age} year old and living in ${this.country} ${city}, ${contactDetails}`);
}

// info.call(person, "delhi", 9028303);
// info.apply(person2, ['shaharanpur', 123323]);
// let hey = info.bind(person3, 'USA', 2333);
// hey(); // Call the bound function


const reverstring=(str)=>{
   const reverse= str.split('').reverse().join('');
   return reverse;
}
console.log(reverstring('sandeep'));

const arr=[10,'sandeep', '100', '200','Kuldeep', true, null, 'sandeep', 'aajtak'];
for(const e of arr){
    console.log(e);
}