 const bcrypt = require("bcrypt");

 const User=require("../model/userData");

 //signup ka route handler

 exports.signup= async (req,res)=>{


    try{
        //get data
        const {name,email,password,role}=req.body;

        //check if User already exist
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already hai bhai',

            })
        }

        //secure password
        let hashedPassword;
        let saltRounds=10;
        try{
            hashedPassword=await bcrypt.hash(password,saltRounds);
        }
        catch(err){
            return res.status(509).json({
                success:false,
                message:'error aagayi hai hashing me!'
            })
        }
        //create new entry
        const user = await User.create({
            name,email,password,role
        })
        return res.status(200).json({
            success:true,
            message:'Success mil gayi hai'
        })

    }
    catch(err){
        return res.status(420).json({
            success:false,
            message:'User cannot be registered , please try again later !'
        })

    }
 }