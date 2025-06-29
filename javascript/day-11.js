// Comparative operators
// let a =10;
// let b=10;

// let c=a==b;

// console.log(c);

// loose equlaity
// let a="ANSHUL";
// let b="anshul";

// console.log(a==b);

// let c=10;
// let d='10';

// console.log(c==d);

// Strict equlaity
// console.log(c===d);

// Not equal to case:
// let a=10;
// let b=10;

// console.log(a!==b);

// console.log(a<b);
// console.log(a>b);
// console.log(a>=b);
// console.log(a<=b);


// Logical operators:
// AND-
let a=30;
let b=20;
let c=10;
// console.log(a>b && a>c);
// console.log(a>b && a<c);
// console.log(a<b && a>c);
// console.log(a<b && a<c);

// true+true=true;
// false+false=false;
// false+true=false;
// true+false=false;


// OR operation
// console.log(a>b || a>c);
// console.log(a>b || a<c);
// console.log(a<b || a>c);
// console.log(a<b || a<c);

// true+true=true;
// true+false=true;
// false+true=true;
// false+false=false;


let s=30;
let g=20;
let d=50;
let e='50';

// 1) try checking if d and e are equal; loose and StrictMode;
// 2) create a case to ckeck if s is largest of all three, s,g,d;
// 3) create a case to check if s is smaller then any of the three;

// If-conditions


if(false){
    s=s-10;
}else{
    s=s+10;
}

console.log(s);

// Ternary operators

let result= s>g ? true : false;

s>g ? s=s-10 : s=s+10;
console.log(result);


let val1=54;
let val2 =76;

// if val1 is greater than val2 then set val2=val1; else val1=val2;

// Write a program in your preferred language to check whether a number entered by 
// the user is positive, negative, or zero using if-else statements.

// let a = 10;
// if(a < 0){
//     console.log("negative");
// }
// else{
//    console.log("positive");
// }

let ab=10;

if(ab<=0){
    if(ab==0){
        console.log("The number is 0");
    }else{
        console.log("The number is positive");
    }
}else{
    console.log("The number is negative");
}




