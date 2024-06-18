// Either we create promise or consume promises

// case:0
/* const prom= new Promise();
console.log(prom); */
// Uncaught TypeError: Promise resolver undefined is not a function

// case:01
/* const prom1 = new Promise(( )=>{
});
console.log(prom1); */

/*  Note: promise is created successfully, 
promise is in pending state,
[[PromiseState]]:"pending"
[[PromiseResult]]:undefined */
// Block Comment: Shift + Option + A

//case: 02
const prom2 = new Promise(( resolve, reject)=>{
    console.log('Async operation is going on...');
    resolve(); // resolve doesn't return  anything [[PromiseResult]]:undefined, [[PromiseState]]:" fullfilled "
    reject();
    // resolve ko call krne ke bad me .then() method ke sath resolve attached hoga 
});

prom2.then(()=>{
    console.log('case: 02');
    console.log("Async operation is completed ");

})
.catch(()=>{
    console.log('case: 02');
    console.log("Async operation is not completed ");
})

new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve({'name':'sandeep', "age":27}); // [[PromiseResult]]:object,
    },1000);
})
.then((user)=>{
    console.log('case: 03');
    console.log(user);
})
new Promise((resolve, reject)=>{
    let error= true;
    if(!error){
        resolve({username:'sandeep', dob: 1999});
    }
    else{
        reject('Error is '+ error);
    }
}).then((user)=>{

    console.log(user);
    return user.dob;
}).then((dob)=>{
    let old= 2024-dob;
console.log(old);
}).catch((error)=>{
    console.log(error)
})

