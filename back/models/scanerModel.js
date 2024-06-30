import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({

    userID: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        required: true
    },



})


const userModel = mongoose.model("",userSchema);

export default userModel;