const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const {ping,registerUser}=require("./controllers/registrationController");
const {loginUser} = require("./controllers/loginController"); 


const app=express();
app.use(express.json());
app.use(cors());

const PORT=8010;

const MONGODB_URL="mongodb+srv://gokulrajc63:epzaHzvtaYnxf4re@todo.1czrgxx.mongodb.net/?retryWrites=true&w=majority&appName=todo";
mongoose
.connect(MONGODB_URL)
.then(()=>console.log("Database Connected Successfully!"))
.catch((err)=>console.log("err",err));

app.listen(PORT,()=>{
    console.log("Server Running!");
});

app.post("/ping",ping);
app.post("/register",registerUser);
app.post("/login", loginUser);