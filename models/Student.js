const mongoose = require('mongoose');
const Schema = mongoose.Schema

const student = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    standard: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
})

module.exports = mongoose.model('student', student)