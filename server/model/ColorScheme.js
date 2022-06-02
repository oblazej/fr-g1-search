const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const colorschemeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    primaryColors: {
        type: Array,
        required: true
    },
    secondaryColors: {
        type: Array,
        required: true
    },
    tertiaryColors: {
        type: Array,
        required: true
    },
    elements: {
        type: Array,
        required: true
    },
})

module.exports = mongoose.model("ColorScheme", colorschemeSchema);