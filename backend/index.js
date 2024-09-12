

const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");

const cors = require("cors")
const app = express();

app.use(express.json())
app.use(cors())


app.post("/todo", async function(req,res) {
    const CreatePayload = req.body;
    const parsedPayload = createTodo.safeParse(CreatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
  await todo.create({
    title: CreatePayload.title,
    description: CreatePayload.description,
    completed: false,
  })
res.json({
    msg:"Todo created"
})
})

app.get("/todos", async function(req,res) {
    const todos = await todo.find({});

    res.json({
        todos
    })
    
})
  


app.put("/completed", async function(req,res) {
    const updatePayload = req.body;
    const parsedPayload = updatePayload.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg:" you sent the wrong inputs"
        })
        return;
    }

    await todo.update({
        _id: req.body.id

    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
    
    
})






app.listen(3000)