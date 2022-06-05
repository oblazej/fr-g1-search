const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dragon = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    owner: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    primaryColor: {
        type: Number,
        required: true
    },
    secondaryColor: {
        type: Number,
        required: true
    },
    tertiaryColor: {
        type: Number,
        required: true
    },
    element: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model("Dragon", dragon);