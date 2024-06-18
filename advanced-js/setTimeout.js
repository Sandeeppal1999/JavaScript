console.log("SetTimout Blocking code!.......⚒");

console.log("Start!..");


setTimeout(()=>{
    console.log("Call Back after 5sec");

},5000);

let startDate= new Date().getTime();
let endDate=startDate;

while(endDate<startDate+1000){
    endDate=new Date().getTime();
}
console.log("After 10 Sec... while Expired ..");

// 