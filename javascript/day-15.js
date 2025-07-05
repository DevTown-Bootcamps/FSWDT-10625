//Array
let fruit=["cheery","apple",34,21,'C',false];
//o based indexing- you will start with 0.
//length-6
// "cheery" - 0
// ,"apple"-1
// ,34-2
// ,21-3
// ,'C'-4
// ,false-5
// if your length is n then maximun indexing will be n-1.
//console.log(fruit);

// for(let i=0;i<fruit.length;i++){
//     console.log(fruit[i]);
// }

//to add or push element to the end of the array
//fruit.push("mango");
//console.log(fruit);

//pop-take any element out of array from the end.
//console.log(fruit.pop());

//unshift()-add the element to the starting of the array
//fruit.unshift("pineapple");
//console.log(fruit);

//shift()-to remove element from the front;
//console.log(fruit.shift());
//console.log(fruit);

//indexof()-used to find the index of the element in array
// console.log(fruit.indexOf(false));
// console.log(fruit.indexOf(34));

//includes()-to check if any given element is present inside the array or not
// console.log(fruit.includes(21));
// console.log(fruit.includes(45));

//slice(start,end)- return a part of array
//let fruit=["cheery","apple",34,21,'C',false];

// console.log(fruit.slice(1,5));

// take an Array, add 34,25 at the end of the Array, then add 66,23 to the starting of the Array, 
// then do one pop(), and one shift(), then tell me your output.Tell me the index of 25 and 66.
//then print element of array from 2nd index to 5th index.


//String:collection of charaters- 'A','B'
//A N S H U L
//0 1 2 3 4 5

let name="Anshul@121324.,.,;,'";

//console.log(name);

//console.log(name.charAt(2));
//console.log(name.charAt(5));

// for(let i=0;i<name.length;i++){
//     console.log(name.charAt(i));
// }

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.indexOf('n'));
console.log(name.includes('n'));
console.log(name.slice(1,5));
console.log(name.substring(1,5));
console.log(name.substr(0,4));

let a=" Anshul Ojha ";
console.log(a.trim()); //remove extra spcess from begining and end of the string.

let b="used to split each word in a string";
console.log(b.split(" "));

let firstname="Anshul";
let lastname="Ojha"

let s=firstname+" "+lastname;
console.log(s);


//if-else

//you have a variable z, this contains Number, check if this number is divisible by 5 as well as divisibility by 2
// use logical operator in this;if it is divisible then 
//print the value of z/5; else if it is not divisible then find the remender.

//write a code to check if a number is prime or not

//2,3,5,7,11

if(num%2!=0&&num%3!=0&&num%5!=0&&num%7!=0&&num%11!=0){
    console.log("Number is prime");
}else{
    console.log("Number is not prime");
}

//1
//12
//123
//1234
//12345


// 12345
// 1234
// 123
// 12
// 1


//create  a array of string and print only starting 2 index of the string;


