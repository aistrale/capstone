const mongoose = require('mongoose');

const JobRequestSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    jobLocation: {
        type: String,
        required: true,
    },
    jobLink: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        required: false,
    },
    salary: {
        type: Number,
        required: false,
    },
    fullRemote: {
        type: String,
        required: false,
    },
    jobType: {
        type: String,
        required: false,
    },
}, {timestamps: true, strict: true})

module.exports = mongoose.model('modelJobEntry', JobRequestSchema, 'jobEntries')