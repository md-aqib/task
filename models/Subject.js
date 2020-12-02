const mongoose = require('mongoose');
const Schema = mongoose.Schema

const subject = new Schema({
    subject: String,
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    addedAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Subject', subject)