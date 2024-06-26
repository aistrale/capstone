const mongoose = require('mongoose')

const RecruiterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
}, {timestamps: true, strict: true})

module.exports = mongoose.model('modelRecruiter', RecruiterSchema, 'recruiters')