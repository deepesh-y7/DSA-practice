
function reverseInt(n){

    let ncopy = n
    let rev = 0;

    n = Math.abs(n)

    while(n>0){
        let last = n%10;
        rev = (10*rev)+last;
        n = Math.floor(n/10);
    }

    let limit = 2**31

    if (rev > limit - 1)  return 0;

    return (ncopy<0)?-rev:rev;
}

let num = 8463847412 ;
let result = reverseInt(num)

console.log(result)