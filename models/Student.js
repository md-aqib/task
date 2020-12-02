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
        required: true,
        min: 10
    },
    standard: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    subject: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Student', student)