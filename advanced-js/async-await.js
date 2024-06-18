/* 
what is async?
~ async is keyword used before a function to make a  asynchronous function
~ always return a promise
~ if you dont return promise,and return a non promise value (string , int)then automation wrapped value inside a promise then return value;  

what is await?
~ Await  only be ussed inside a async function 
~ async and await is used to handle promise

 */

const p1= new Promise((resolve, reject)=>{
   resolve('promise is called...')
})

async function fetchData(){
    return p1; 
}
const dataPromise=fetchData();
console.log(dataPromise);
dataPromise.then((res)=>{
    console.log(res)
})