import mongoose from "mongoose";

const scanerSchema  = new mongoose.Schema({

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },

    date: {
        type: Date,
        required: true
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