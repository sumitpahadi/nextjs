import  { mongoose } from "mongoose"
export const connect= async()=>{
    try {
       const {connection}=await mongoose.connect( "mongodb+srv://sumitrawat:sumitrawat123@fooddelivery.4rq8d0f.mongodb.net/nextjs?retryWrites=true&w=majority")
        console.log("db is connected")
        console.log("connection with the host",connection.host)


        
    } catch (error) {
        console.log("failed to connect database ",error)
        
    }

}