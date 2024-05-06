const express = require("express")
const mangoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Customer')


const app = express()
app.use(express.json())
app.use(cors())

// connect with the database (copy the connection string)
mangoose.connect("mongodb://localhost:27017/customer");

app.post("/login", (req,res)=>{
    const{email, password} = req.body
    EmployeeModel.findOne({email: email})
    .then(user => {
       if(user){
        if(user.password === password){
            res.json("Success")
        }
        else{
            res.json("Incorrect Password")
        }
       }
       else{
        res.json("Email is not Registered")
       }
    })
})

app.post('/register', (req, res)=>{
    EmployeeModel.create(req.body)
    .then(customers => res.json(customers))
    .catch(err => res.json(err))
})

// to check if server is running
app.listen(3001, ()=> {
    console.log("server is running");
})