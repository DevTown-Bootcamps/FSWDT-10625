//Functions-reusable code block to perform a certain task.

//function function_name(paramter){
    //code block for the function
//}

// function greet(){
//     console.log("Hello");
// }


// greet();
// greet();
// greet();


//passing paramter value to function

// function add(a,b){
//     return a+b;
// }



//console.log(add(2,3));

// function mul(){
//     return add(3,4)*2;
// }

// console.log(mul());


//function expression

// let add= function(a,b){
//     return a+b;
// }

// console.log(add(3,2));


//arrow function
// const greet = () =>{
//     console.log("hello");
// }

// greet();

// const square = (a) =>{
//   return a*a;
// }

// const sqaure(n){
//     return n*n;
// }

// console.log(square(2));

//default paramter
// function greet(name = "Guest"){
//     console.log(name);
// }

// greet();
// greet('Anshul');


// function mul(a=3,b=4){
//     console.log(a*b);
// }

// mul();
// mul(2);
// mul(4,5);


//Take multiple parameter- I do not know number of paramters

// function sum(...n){
//     let sum=0;

//     for(let num of n){
//       sum+=num;
//     }
//     console.log(sum);
// }

// sum(1,2,3);
// sum(1,2,3,4,5);
// sum(1,2,3,4,5,6);

//Create a function to compute the cube of the number, using arrow function.Pass n as a paramter.
// Use default paramter in this case.

//Take n number of paraters and compute multiplication of these numbers.

//scope of function

// function mess(){
//   let message="I am there";
//   console.log(message);
// }
// mess();


const prd = (...number) => {
    let result=1;

    for(let i=0;i<number.length;i++){
        result*=number[i];
    }
    console.log(result);
}
prd(2,3,4,5);

// Write a function isEven that returns true if the given number is even.

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(12)); 
console.log(isEven(9));

// Write a function sum that takes two numbers and returns their sum.

// Write a function maxOfThree that returns the maximum of three numbers.
function maxOfThree(x,y,z) {
  let max;
  if (x >= y && x >= z) {
    max = x;
  } else if (y >= x && y >= z) {
    max = y;
  } else {
    max = z;
  }
  return max;
}

//Create a function factorial(n) that returns the factorial of a number n.

function factorial(n) {
  let facto = 1;
  for (let i = 1; i <= n; i++) {
    facto *= i;
  }
  return facto;
}
console.log(factorial(9));

//Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3, 
// print "Fizz", for 5 print "Buzz".

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}fizzBuzz(15);

