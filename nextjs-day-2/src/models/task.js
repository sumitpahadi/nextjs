import mongoose from "mongoose";
const Taskschema=new mongoose.Schema(
    {
        title:{
            required:true,
            type:String
        },
        content:{
            required:true,
            type:String
        },
        addeddate:{
            type:Date,
            required:true,
            default:Date.now(),

        },
        status:{
            type:String,
            enum:["pending","completed"],
            default:"pending"
        },
        userid:{
            type:mongoose.ObjectId,
            required:true,
        }

    }
)

 const Task=mongoose.models.tasks  || mongoose.model("tasks",Taskschema)
 export default Task;