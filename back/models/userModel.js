import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['user', 'admin', 'superadmin'],
        default: 'user'
    },

    company: {
        type: String,
        required: true 
    },

    sector: {
        type: String,
        required: true
    }


})


const userModel = mongoose.model("users",userSchema);

export default userModel;