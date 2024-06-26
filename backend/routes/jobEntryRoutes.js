const express = require('express');
const jobEntries = express.Router();

const JobEntryModel = require('../models/modelJobEntry');

jobEntries.get('/entries', async (req, res) =>{
    try {
        const jobEntries = await JobEntryModel.find()
        res.status(201).send(jobEntries)
    } catch (error) {
        res.status(500).send({statusCode: 500, message: 'error', error: error.message})
    }
})

jobEntries.get('/entry/:entryId', async (req, res) =>{
    const { entryId } = req.params

    try {
        const jobEntry = await JobEntryModel.findById(entryId)
        if(!jobEntry) {
            return res.status(404).send({
                message: "job entry not found"
            })
        }
        res.status(201).send(jobEntry)
    } catch (error) {
        res.status(500).send({statusCode: 500, message: 'error', error: error.message})
    }
})

jobEntries.post('/entry', async (req, res) =>{
    const newJobEntry = new JobEntryModel({
        jobTitle: req.body.jobTitle,
        company: req.body.company,
        jobLocation: req.body.jobLocation,
    })

    try {
        const jobEntry = await newJobEntry.save()
        res.status(201).send(jobEntry)
    } catch (error) {
        res.status(500).send({statusCode: 500, message: 'error', error: error.message})
    }
})

jobEntries.patch('/entry/:entryId', async (req, res) =>{
    const { entryId } = req.params

    try {
        const jobEntry = await JobEntryModel.findById(entryId)
        
        if(!jobEntry) {
            return res.status(404).send({
                message: "job entry not found"
            })
        }
        const updatedEntry = req.body
        const result = await JobEntryModel.findByIdAndUpdate(entryId, updatedEntry, {new: true})
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({statusCode: 500, message: 'error', error: error.message})
    }
})

jobEntries.delete('/entry/:entryId', async (req, res) =>{
    const { entryId } = req.params

    try {
        const jobEntry = await JobEntryModel.findByIdAndDelete(entryId)
        
        if(!jobEntry) {
            return res.status(404).send({
                message: "job entry not found"
            })
        }
        res.status(200).send({message: "job entry deleted successfully"})
    } catch (error) {
        res.status(500).send({statusCode: 500, message: 'error', error: error.message})
    }
})

module.exports = jobEntries