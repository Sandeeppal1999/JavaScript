const apiUrl = 'https://fakestoreapi.com/products';
fetch(apiUrl)
.then((response)=>{
    if(response.status ==200){
        return response.json();
    }
    else{
        return response.status; // 404,doesn't go inside catch block.
    }
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log("error comming "+ err);
})
