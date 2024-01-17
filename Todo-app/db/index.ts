import mongoose from "mongoose";

const MONGODB_URL: string = "mongodb+srv://kanhu2551996:7735Kanhu@cluster0.ppkltxd.mongodb.net/todo-app";
// const MONGODB_URL: string = "mongodb://localhost:27017/todo-app";
mongoose.connect(MONGODB_URL).then(()=>{
    console.log("Connected to DB");
    
})
.catch((err)=>{
    console.log(err);
    
})