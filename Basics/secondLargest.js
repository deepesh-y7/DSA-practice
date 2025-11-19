
function secondLargest(arr){

    if(arr.length<2){
       throw new Error("array should have at least 2 elements");
        
    }
    
    let firstlargest = -Infinity;
    let secondlargest = -Infinity;

    for(let i =0; i<arr.length; i++){
        
        if(arr[i]>firstlargest){
            secondLargest = firstlargest;
            firstlargest = arr[i];
        }else if(arr[i]>secondLargest && arr[i]!== firstlargest){
            secondLargest=arr[i]
        }
    }
      return secondLargest;

}
let arr =[10,551,44,75,1,78,566,1775,14,42]
console.log(secondLargest(arr))