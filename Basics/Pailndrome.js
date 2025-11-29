

function palindrome(n) {
    if(n<0) return "no. is negative"
    
    let orifinalnum = n
    let rev = 0;

    while (n > 0) {
        let rem = n % 10;        // get last digit
        rev = (10 * rev) + rem;  // build reversed number
        n = Math.floor(n / 10);  // remove last digit
    }

    if(rev == orifinalnum){
        console.log(`yes ${rev} is palindrome`)
    }else{
         console.log(`given no. is not paildrome`)
    }

}

let num = -282;
let result = palindrome(num);

console.log(result); // 782
