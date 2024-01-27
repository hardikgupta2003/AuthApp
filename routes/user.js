const express = require("express");
const router= express.Router();

const {login,signup}= require("../controllers/Auth");
const {auth,isStudent,isAdmin}=require("../middlewares/auth")

router.post("/login",login);
router.post("/signup",signup);


//protected routes
//testing protected routes for single middlewares
router.get('/test', auth ,(req,res)=>{
    res.json({
        success:true,
        message: "welcome to the protected route for the test!"
      
    });
});
router.get('/student', auth ,isStudent,(req,res)=>{
    res.json({
        success:true,
        message: "welcome to the protected route for the student!"
        
    });
});
router.get('/admin', auth ,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message: "welcome to the protected route for the admin!"
        
    });
});

module.exports=router;








// this is testing json for postman
// {
    
//     "email": "khushboo@gmail.com",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtodXNoYm9vQGdtYWlsLmNvbSIsImlkIjoiNjViNGU5MDI3ZGQ3YWU2YzYxMDY4NjAxIiwicm9sZSI6IlZpc2l0b3IiLCJpYXQiOjE3MDYzNTk2NjcsImV4cCI6MTcwNjM2Njg2N30.F77hNNG4FM7JC8MYZH0sQVOBcauZ6nv04O5DqbW8jHA"
  
// }