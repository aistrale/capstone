const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        verified: {
            type: Boolean,
            required: false,
        }
    }
)

module.exports = mongoose.model('UserLogin', userSchema, 'users')