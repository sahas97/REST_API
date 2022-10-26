const mongoose = require("mongoose")

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;

const postSchema = mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    age: {
        type:String,
        required: true,
    },
    date : {
        type: String,
        default: formattedToday.toString,
    }
})

module.exports = mongoose.model("posts", postSchema)

