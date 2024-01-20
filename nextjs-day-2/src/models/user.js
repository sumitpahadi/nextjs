import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
   
});

const User = mongoose.models.users || mongoose.model("users", userschema);

export default User;
