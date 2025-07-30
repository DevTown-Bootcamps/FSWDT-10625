// File FileSystem

const fs=require('fs');
const events=require('events');

//Writing into a file

// fs.writeFileSync("test.txt","Hey, This is Anshul");

// fs.writeFile("test.txt","I am writing this text to check for any error",err=>{
//     if(err) throw err;
//     console.log("File has been updated");
    
// });

//Appending in the file
// fs.appendFile("test.txt","I am appending the text to file",err=>{
//     if(err) throw err;
//     console.log("New text has been added");
// })

//Reading the file

// const data=fs.readFileSync("test.txt",'utf-8');
// console.log(data);

//create one file named fileURL, write inside the file, read the file, then append inside the file, 
//then read it again.

//Events

const myEmmiter=new events.EventEmitter();

myEmmiter.on("fileDone",()=>{
    console.log("The file read operation has been done");
});

fs.readFile("test.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
    myEmmiter.emit("fileDone");
})

//creat a event emiiter and trigger it for a  write operation.



