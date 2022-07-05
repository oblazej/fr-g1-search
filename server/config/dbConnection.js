const mongoose = require("mongoose");
const url = "mongodb+srv://root:b42zbvLyDYD1hyD5@cluster0.c20qt.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;