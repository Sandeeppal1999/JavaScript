'use strict'

console.log("promieses!...........");
// promises
// Resolve 
// reject
// pending 


// 1. By using Object- we create promises function 

function func1(){
    return new Promise(function(Resolve,reject){
        setTimeout(()=>{
            const error=false;
            if(!error){
                console.log("Function : your promises has been resolved...");
                Resolve();
            }
            else{
                console.log("Function : your promises has  not been resolved...");
                reject();
            }
        },1000);
    })
}
func1().then(function(){
    console.log("You full filled your promises🤩");
}).catch(function(){
    console.log("You didnot  filled your promises....😴");
})
// 2. BY using constructor syntax;

const prom= new Promise(( Resolve, reject)=>{
    setTimeout(()=>{
        let rollNo=[1,2,3,4,45,567,677];
        Resolve(rollNo);
        reject("Incorrect Data not fetched");
    },2000);

});
prom.then((rollNo)=>{
    console.log("Rollno-"+rollNo);
}).catch(()=>{
    console.log("Rollno not fetched");
})