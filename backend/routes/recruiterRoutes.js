const express = require('express');
const recruiters = express.Router();

const RecruiterModel = require('../models/modelRecruiter')

recruiters.get('/recruiters', async (req, res) =>{
    try {
        const recruiters = await RecruiterModel.find()
        res.status(201).send(recruiters)
    } catch (error) {
        res.status(500).send({statusCode: 500, message: 'error', error: error.message})
    }
})

recruiters.get('/recruiter/:recruiterId', async (req, res) =>{
    const { recruiterId } = req.params

    try {
        const recruiter = await RecruiterModel.findById(recruiterId)
        if(!recruiter) {
            return res.status(404).send({
                message: "recruiter not found"
            })
        }
        res.status(201).send(recruiter)
    } catch (error) {
        res.status(500).send({statusCode: 500, message: 'error', error: error.message})
    }
})

recruiters.post('/recruiter', async (req, res) =>{
    const newRecruiter = new RecruiterModel({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
    })

    try {
        const recruiter = await newRecruiter.save()
        res.status(201).send(recruiter)
    } catch (error) {
        res.status(500).send({statusCode: 500, message: 'error', error: error.message})
    }
})

recruiters.patch('/recruiter/:recruiterId', async (req, res) =>{
    const { recruiterId } = req.params

    try {
        const recruiter = await RecruiterModel.findById(recruiterId)
        
        if(!recruiter) {
            return res.status(404).send({
                message: "recruiter not found"
            })
        }
        const updatedRecruiter = req.body
        const result = await RecruiterModel.findByIdAndUpdate(recruiterId, updatedRecruiter, {new: true})
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({statusCode: 500, message: 'error', error: error.message})
    }
})

recruiters.delete('/recruiter/:recruiterId', async (req, res) =>{
    const { recruiterId } = req.params

    try {
        const recruiter = await RecruiterModel.findByIdAndDelete(recruiterId)
        
        if(!recruiter) {
            return res.status(404).send({
                message: "recruiter not found"
            })
        }
        res.status(200).send({message: "recruiter deleted successfully"})
    } catch (error) {
        res.status(500).send({statusCode: 500, message: 'error', error: error.message})
    }
})

module.exports = recruiters