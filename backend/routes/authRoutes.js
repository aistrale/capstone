const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');
const jwtSecretKey = 'jwt-secret-key';

const UserModel = require('../models/modelUser');

router.post('/auth/register', async (req, res) => {
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

router.post('/auth/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userLogin = await UserModel.findOne({username: username});
    if(userLogin) {
        const login = await bcrypt.compare(password, userLogin.password);
        if(login) {
            const token = jwt.sign(
                {
                    id: userLogin.id,
                    username: userLogin.username,
                    fullname: userLogin.fullName,
                    email: userLogin.email
                }, jwtSecretKey , { expiresIn: '1h' });
            return res.status(200).json(token);
        } else {
            return res.status(400).json({message: 'Invalid Password'})
        }
    } else {
        return res.status(400).json({message: 'Invalid Username'})
    }
})

module.exports = router;