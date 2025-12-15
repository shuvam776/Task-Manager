import bcrypt from "bcrypt";
import db from "../models/db.js"
import ApiResponse from "../utils/api-response.js"
const saltRounds = 10;
import app from "../app.js"
import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
console.log(ACCESS_TOKEN_SECRET);
console.log(process.env.ACCESS_TOKEN_SECRET);

const signUpUser = async(req,res) => {
    const { email, password } = req.body;
    const existingUser = await db.findOne({ email });

    if(existingUser){
       return res.status(404).json({"msg":"User already exists"})
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const newUser = await db.create({
        email : email,
        password : hashedPassword
    });
    res.json({msg : "Successfully signed-up"})


}

const signInUser = async(req,res) => {
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET

    const { email,password } = req.body;
    const userData = await db.findOne({email})
    if(!userData){
        return res.json({ msg : "User not logged in previously"})
    }
    const checkPassword = await bcrypt.compare(password,userData.password);

    if(!checkPassword){
        return res.json({ msg: "Wrong password"})
    }
    else{
        const token = jwt.sign({ id:email },ACCESS_TOKEN_SECRET );
        res.cookie("id", token ,{
            secure:true,
            sameSite : "none",
            httpOnly :true,
        });
        return res.json({ msg: "success"});
    }
    
};

export { signUpUser,signInUser }