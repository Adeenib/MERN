const mongoose = require('mongoose')
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name cannot be emtpy"],
        minLength: [3, "The min length should be more than 3"]
    }
}, { timestamps: true })
const Author = mongoose.model('Author', authorSchema)
module.exports = Author