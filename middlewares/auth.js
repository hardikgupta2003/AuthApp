//auth ,isStudent ,isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.auth=(req,res,next)=>{
    try{
        const token= req.body.token;
        if(!token) return res.status(401).json({
            success:false,
            messsage:"No Token Provided"
        });
          
        // verify the token
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode)
            req.user= decode;
           
        }
         catch(err){
            console.log(err);
            return res.status(401).json({
                success:false,
                messsage:"Token is invalid!"
            });
        }
        next();
    }   
     catch(err){
        console.log(err);
            return res.status(401).json({
                success:false,
                messsage:"while Verifing the Token,something went wrong!"
            });
    }
}

exports.isStudent = (req,res,next)=> {
    try{
        if(req.user.role !== "Student"){
             return res.status(403).json({
                 success: false,
                 message: 'You are not authorized to perform this action'
             }) 
        }
        next();
    }catch(e){
       return res.status(500).json({
           success:false,
           message:'Server error!'
       })    
    }  
};

exports.isAdmin = (req,res,next)=>{
    try{
        if(req.user.role !== "Admin"){
             return res.status(403).json({
                 success: false,
                 message: 'You are not authorized to perform this action'
             }) 
        }
        else{

            next();
        }
    }catch(e){
       return res.status(500).json({
           success:false,
           message:'Server error!'
       })    
    }  
};

