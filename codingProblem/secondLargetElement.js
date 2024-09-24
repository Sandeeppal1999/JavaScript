function secondLargest(arr){
    if(arr.length<2){
        return `Array should have atleast 2 element`;
    }
    let large = -Infinity;
    let secondLarge = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            secondLarge= large;
            large=arr[i];
        }
        else if(arr[i]>secondLarge && arr[i]!= large){
            secondLarge=arr[i];
        }
    }
    if(secondLarge ===-Infinity){
        return "There is no second largest element.";
    }
    return secondLarge;
}

const arr = [10, 5, 8, 20, 15];
console.log(secondLargest(arr));