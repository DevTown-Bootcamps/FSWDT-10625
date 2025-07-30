const http=require('http');
const express=require('express');
const app=express();

// http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.end("Home page");
//     }else if(req.url==="/about"){
//         res.end("About page");
//     }else if(req.url==="/contact"){
//         res.end("Contact page");
//     }else{
//         res.end("page not found");
//     }
// }).listen(8080,()=>{
//     console.log("Server running on port 8080");
// })

app.get("/",(req,res)=>{
    res.send("Welcome to the home page");
})


app.get("/about",(req,res)=>{
    res.send("Wlecome to about page");
})

app.get("/contact",(req,res)=>{
    res.send("Welcome to contact page");
})

app.listen(8080,()=>{console.log("Server running on port 8080")});



