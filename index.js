const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

require("./config/database").connect();

//route import karo and mount kro
const user = require("./routes/user");
app.use("/api/v1",user);

//activate krdo
app.listen(PORT , ()=>{
    console.log(`App toh bdiyaa run ho raha hai ye PORT no. pr -> ${PORT}`);
})