
function countDigit(n){
    
    if(n==0)return 1;

    let count = 0

    // to make positive
    n= Math.abs(n)
    while(n>0){
        n = Math.floor(n/10)
        count++;
    }
    return count;

}

let num = -285547;
let results = countDigit(num)

console.log(results)