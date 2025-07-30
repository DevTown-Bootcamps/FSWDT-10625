const http=require('http');
// const express=require('express');
// const app=express();

http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Home page");
    }else if(req.url==="/about"){
        res.end("About page");
    }else{
        res.end("page not found");
    }
}).listen(3000,()=>{
    console.log("Server running on port 3000");
})



