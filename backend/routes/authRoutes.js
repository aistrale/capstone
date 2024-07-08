const express = require('express');
const auth = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');
const jwtSecretKey = 'jwt-secret-key';

const UserModel = require('../models/modelUser');

const AuthMw = require('../middlewares/AuthMw');

auth.get('/user', AuthMw, async (req, res) => {
    try {
        res.status(201).send(req.user)
    } catch (error) {
        res.status(500).send({statusCode: 500, message: 'error', error: error.message})
    }
})

auth.post('/auth/register', async (req, res) => {
    const password = req.body.password
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            const user = new UserModel({
                ...req.body,
                password: hash,
            });
            await user.save();
            return res.status(201).json('User created');
        })
    })
})

auth.post('/auth/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userLogin = await UserModel.findOne({username: username});
    if(userLogin) {
        const login = await bcrypt.compare(password, userLogin.password);
        if(login) {
            const token = jwt.sign(
                {
                    _id: userLogin._id,
                    username: userLogin.username,
                    fullname: userLogin.fullname,
                    email: userLogin.email
                }, jwtSecretKey , { expiresIn: '1h' });
            return res.status(200).json(token);
        } else {
            return res.status(400).json({message: 'Invalid Password'})
        }
    } else {
        return res.status(400).json({message: 'Invalid Username', userLogin})
    }
})

auth.patch('/user/:userId', AuthMw, async (req, res) => {
    const { userId } = req.params

    const singleUser = await UserModel.findById(userId)

    try {
    if(!singleUser) {
        return res.status(404).send({
            message: "user not found"
        })
    }
    const updatedUser = req.body
    const result = await UserModel.findByIdAndUpdate(userId, updatedUser, {new: true})
    res.status(200).send(result)
} catch (error) {
    res.status(500).send({statusCode: 500, message: 'error', error: error.message})
}
})

auth.delete('/user/:userId', AuthMw, async (req, res) =>{
    const { userId } = req.params

    try {
        const singleUser = await UserModel.findByIdAndDelete(userId)
        
        if(!singleUser) {
            return res.status(404).send({
                message: "user not found"
            })
        }
        res.status(200).send({message: "user deleted successfully"})
    } catch (error) {
        res.status(500).send({statusCode: 500, message: 'error', error: error.message})
    }
})

module.exports = auth;