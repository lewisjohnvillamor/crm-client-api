const express = require("express");
const { insertUser,getUserByEmail } = require("../model/user/user.model");
const router = express.Router()
const {hasPassword,comparePassword} = require("../helpers/bcrypt.helper");
const { json } = require("express/lib/response");

// const insertUser = require ("../model/user/user.model")

router.all("/", (req,res,next) => {
    next();
})

//Create New User Route
router.post("/",async(req,res) =>
{
    const {name, company,address, phone,email,password} = req.body
    let userInput = {
        name: req.body.name,
        company: req.body.company,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    };

    console.log ("this new object")
    console.log (name, company,address, phone,email,password)
    console.log (userInput)
    try {
                
        const hashedPass = await hasPassword(password)

        const newUsereObj = {
            name,
            company,
            address,
            phone,
            email,
            password: hashedPass,
        }

        const result = await insertUser (newUsereObj);
        console.log(result);
        res.json({message: "New user created", result});
        
    } catch (error) {
        console.log(error);
        res.json({statusx:'error',message: error.message});
    }
   
});

//User Signin Router
router.post("/login", async(req,res) => {
    const {email,password} = req.body

   if (!email || !password){
       return res.json({status:"error", message:"Invalid form Submition"})
    }
    const user = await getUserByEmail(email)


   
    const passFromDB = user && user._id ? user.password: null 
    if(!passFromDB) return res.json({status:"error", message:"Invalid email or Password"})
    console.log("resultestt");
    //Double Check for real data here
    const result = await comparePassword(password,passFromDB)
    console.log(result);

    res.json({status:"success", message:"Login Succesfully"})
})

module.exports = router;