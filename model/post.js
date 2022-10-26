const mongoose = require("mongoose")

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
        default: Date.now,
    }
})

module.exports = mongoose.model("posts", postSchema)

