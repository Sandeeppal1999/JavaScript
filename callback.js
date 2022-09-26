'use strict'
console.log("We are learing call back function!...");

// callback simple example
setTimeout(function () {
    console.log("Print After 2 Sec!....");

}, 2000);
console.log("Print Hello Sandeep!......");

// CallBAck hell
const cart = ["watch", "shirt", "laptop", "neckband", "televison"];

apiToCreateOrder(cart,function(){
    apiTOProceedPayment(function(){
        apiToOrderSummary(function(){
            apiToUpdateWallet(function(){
                apiToMessage()
            })
        })
    })
});