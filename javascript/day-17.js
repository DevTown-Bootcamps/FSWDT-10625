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

