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
console.log(fruit.includes(21));
console.log(fruit.includes(45));

//slice(start,end)- return a part of array
//let fruit=["cheery","apple",34,21,'C',false];

console.log(fruit.slice(1,5));

// take an Array, add 34,25 at the end of the Array, then add 66,23 to the starting of the Array, 
// then do one pop(), and one shift(), then tell me your output.Tell me the index of 25 and 66.
//then print element of array from 2nd index to 5th index.
