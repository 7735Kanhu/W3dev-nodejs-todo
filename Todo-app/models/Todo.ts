import mongoose, { model } from "mongoose";
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title:{
        type: String,
        required:true
    }
},{timestamps:true});

export default mongoose.model("Todo", todoSchema)
