// Promise-resolv some operations in js.

// const promise=new Promise((resolve,reject)=>{

// });

// promise
//  .then(result=> console.log(result))
//  .catch(error=> console.error(error))
//  .finally(()=> console.log("Operation completed"));

// const mypromise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Operation is running");
//     }else{
//         reject("Failed to execute");
//     }
// })

// mypromise
//     .then(result=>{
//         console.log(result);
//     })
//     .catch(error=>{
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log("Promise completed");
//     });


// const failing=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Something went wrong");
//     },2000);
// });

// failing
//     .then(result=>{
//         console.log(result);
//     })
//     .catch(error=>{
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log("I am a chill execution, will execute in any case");
//     })

// Promise.all([mypromise,failing])
//   .then(results=>{
//     console.log("All promise resolved",results)
//   })
//   .catch(error=>{
//     console.log("Any one or both promise failed");
//   })

// Race
const fast=new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve("First one");
   },500)
})

const slow=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("Second one");
   },1000)
})

Promise.race([fast,slow]).then(result=>{
  console.log(result);
});