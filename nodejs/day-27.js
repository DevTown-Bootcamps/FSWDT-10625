const express=require('express');
const app=express();

app.use(express.json());

let todos=[
    {id:1,task:"Learn Nodejs",done:false},
    {id:2,task:"Learn Nodejs 2",done:false},
    {id:3,task:"Build rest apis",done:false}
]

app.get("/api/todos",(req,res)=>{
    res.json(todos);
})

app.get("/api/todos/:id",(req,res)=>{
    const todo=todos.find(t=>t.id===parseInt(req.params.id));
    if(!todo){
        return res.status(404).json({messge:"todo not found"});
    }
    res.json(todo)
})

app.post("/api/todos",(req,res)=>{
    const {task}=req.body;

    if(!task){
        return res.status(400).json({message:"Filed should not be empty"});
    }

    const newTodo={
        id:todos.length+1,
        task,
        done:false
    }

    todos.push(newTodo);
    res.status(200).json(newTodo);
})

app.listen(3000,()=>{
    console.log("Server has been started on port 3000");
})

