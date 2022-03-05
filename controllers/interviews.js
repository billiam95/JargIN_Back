const express = require('express');
const router = express.Router();
const Interviews = require('../models/interviews.js')

router.get('/', (req,res)=>{
    Interviews.find({}, (err, foundInterviews)=>{
        res.json(foundInterviews)
    })
})

router.delete('/:id', (req,res)=>{
    Interviews.findByIdAndRemove(req.params.id, (err,deletedInterview)=>{
        res.json(deletedInterview)
    })
})

router.put('/:id', (req,res)=>{
    Interviews.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedInterview)=>{
        res.json(updatedInterview)
    })
})

router.post('/', (req,res)=>{
    Interviews.create(req.body, (err, createdInterview)=>{
        res.json(createdInterview)
    })
})

module.exports = router;
