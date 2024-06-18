const p1= new Promise((resolve, reject)=>{
    setTimeout(()=>{
    //  resolve('P1 success');
     reject('p1, reject');
    },3000);
})
const p2= new Promise((resolve, reject)=>{
    setTimeout(()=>{
    //  resolve('P2 success');
     reject('p2, reject');
    },1000);
})
const p3= new Promise((resolve, reject)=>{
    setTimeout(()=>{
    //  resolve('P3 success');
     reject('p3, reject');
    },2000);
})

Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.error(err);
})
Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.error(err);
})
Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.error(err);// AggregateError: All promises were rejected
    // return all error in object
    console.error(err.errors);
})
Promise.race([p1,p2,p3]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.error(err);
})