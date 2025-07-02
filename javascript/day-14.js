// *
// **
// ***
// ****
// *****

// for(let i=0;i<5;i++){
//     let pattern=" ";
//     for(let j=0;j<=i;j++){
//         pattern+="*";
//     }
//     console.log(pattern);
// }
// i=0:
//  j:0 pattern="*"
// i=1: pattern=" "
//  j:0 pattern="*"
//  j:1 patter="**"
// i=2: pattern=" "
//  j:0 patter="*"
//  j:1 pattern="**"
//  j:3 patter="***"
// i=3: pattern=" "
//  j:0 pattern="*"
//  j:1 pattern="**"
//  j:2 pattern="***"
//  j:3 pattern="****"
// i=4: pattern=" "
//  j:0 patter="*"
//  j:1 pattern="**"
//  j:2 pattern="***"
//  j:3 pattern="****"
//  j:4 pattern="*****"
//pattern=" "

// for ... in loop method
// let details={
//     name:"Anshul",
//     age:66,
//     city:"Delhi"
// }

// for(let i in details){
//     console.log(details[i]);
// }

//.for Each()

// let fruit=["Apple","cherry","banana"];

// fruit.forEach((a,index)=>{
//     console.log(a);
// });

// .map() function

// let a =[1,2,3,4,5,6,7,8,9,10];

// let square=a.map(a=>a*a);
// console.log(square);


//.filter()- used to apply filtering of element of array
 let a =[1,2,3,4,5,6,7,8,9,10];

 let even=a.filter(a=> a%2==0)
 console.log(even);

//  .reduce

let sum=a.reduce((total,current)=> total+current,0);
console.log(sum);
//total=0; current=0;
//current=1; total=1;
//current=2; total=3;
//current=3; total=6
//curent=4; total=10;
//current =5; total=15;
//current=6; total=21;
//current =7; total=28;
//current=8; total=36;
//current =9; total=45;
//current =10; total=55;

// take number in between 1 to 50 and print all even numbers in between

for(let i=0;i<=50;i++){
    if(i%2==0){
    console.log(i);
    }
}


                                                                      