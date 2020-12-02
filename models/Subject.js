const mongoose = require('mongoose');
const Schema = mongoose.Schema

const student = new Schema({
    subject: {
        type: String,
        required: true
    },
    addedAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('student', student)