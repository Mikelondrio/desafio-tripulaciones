import mongoose from "mongoose";

const scanerSchema  = new mongoose.Schema({


    userID: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now()
    },

    url: {
        type: String,
        required: true
    },

    data: {
        type: Object,
        required: true
    }



})


const scanerModel = mongoose.model("scaners",scanerSchema);

export default scanerModel;