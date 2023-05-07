const express = require("express")
const mongoose = require("mongoose")
const ListUser = require('./model')
const app=express()

app.use(express.json())

mongoose.connect("mongodb+srv://chinni123:chinni123@cluster0.wlzh68f.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("db connected"))

app.post('/',async(req,res) =>{
    const {name,email}=req.body
try {
const newUser=new ListUser({name,email})
    newUser.save()
    return res.json(await ListUser.find)
} catch (error) {
    console.log(error)
}
})

app.listen(4600,(req,res)=>{
    console.log("server running")
})