// const user: string[]=['sandeep', 'kulkdeep'];


// Genric

const user1: Array<number>= [12, 12,2 ,3];

//Multi type 
const user3:(String | number)[]= [12, 'samd' ]
const user2: Array<string | number | boolean>= [true, 100, 'sandeep']


let info: Array<string>;
info=['sandeep'];

// iteration of for loop:

for(let i=0;i<user3.length;i++){
    console.log(user3[i]);
}

for(let e in user2){
    console.log(user2[e]);
}