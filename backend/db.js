const mongoose = require("mongoose");
const { string } = require("zod");



mongoose.connect("mongodb+srv://sahilrevankar20co21:6jYIPEcd1Dimp8hK@cluster0.xwbzl.mongodb.net/todos")


const todoSchema = mongoose.Schema({
    title:String,
    description: String,
    completed: {
        type:Boolean,
        default: false
    }
})


const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}

  