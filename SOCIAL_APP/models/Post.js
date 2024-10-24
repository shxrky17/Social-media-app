const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        max: 500
    },
    img: {
        type: String,
    },
    likes: {
        type: Array,
        default: []
    },
    post:{
        type: String,
        defaul:""
    }
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema); // Export as "Post"
