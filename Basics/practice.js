
// second largest

// function secondLargest(arr){
    
//     let firstlg  = -Infinity;
//     let secondlg = -Infinity;

//     for(let i=0; i<arr.length; i++){
    
//         if(arr[i]>firstlg){
//             secondlg = firstlg
//             firstlg = arr[i]
//         }else if(arr[i]>secondlg && arr[i]!== firstlg){
//             secondlg= arr[i]
//         }

        
//     }
//     return secondlg;
// }

// let arr = [10,12,14,17,85,45]
// let result = secondLargest(arr)

// console.log(result);

// --------------------------------------------loop in loop


// for(let i=5; i>0; i--){
//     for(let j=0; j<i; j++){
//         console.log(i,j)
//     }
// }


// -----------------Star pattern----------

// *****
// *****
// *****
// *****
// *****


// for(let i=0; i<5; i++){
//     let row =''
//     for(let j=0; j<5; j++){
//          row = row + '*'
//     }
//     console.log(row)
// }


// ----------------right triangle 
// *
// **
// ***
// ****
// *****

// for(let i=0; i<5; i++){
//     let row = ''
//     for(let j=0; j<i+1; j++){
//          row = row + '*'
//     }
//      console.log(row)
// }


// -----------------------inverted right triangled 
// *****
// ****
// ***
// **
// *


//  for(let i=0; i<5; i++){
//     let row = ''
//     for(let j=0; j<5-i; j++){
//          row = row + '*'
//     }
//      console.log(row)
// }

// ----------------left align traingle
//     *
//    **
//   ***
//  ****
// *****

//  for(let i=0; i<5; i++){
//     let row = ''

//     for(let s=0 ; s<5-i-1; s++){
//         row = row + " "
//     }

//     for(let j=0; j<i+1; j++){
//          row = row + '*'
//     }
//      console.log(row)
// }


// -------------------- countdigit 


function countDigit(n){

    let count = 0;

    n = Math.abs(n)

    while(n>0){
        n = Math.floor(n/10)
    }
}