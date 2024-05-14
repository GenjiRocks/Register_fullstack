const express = require("express")
const mangoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Customer')
const bcrypt = require("bcryptjs")



const app = express()
app.use(express.json())
app.use(cors())

// connect with the database (copy the connection string)
mangoose.connect("mongodb://localhost:27017/customer");
app.post("/login", async (req,res)=>{
    const{email, password} = req.body
    const user = await EmployeeModel.findOne({ email });
    if(user){
        const checkPass = await bcrypt.compareSync(password, user.password);
        if(checkPass){
            res.json("Success");
        }
        else{
            res.json("Incorrect Password");
            // res.status(401).json({ message: "Incorrect Password" });
        }

    }
    else{
        res.json("Email is not Registered");
        // res.status(404).json({ message: "Email is not Registered" });
    }
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