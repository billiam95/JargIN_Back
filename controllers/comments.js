const express = require('express');
const router = express.Router();
const Comments = require('../models/comments.js')

router.get('/', (req,res)=>{
    Comments.find({}, (err, foundComments)=>{
        res.json(foundComments)
    })
})

router.delete('/:id', (req,res)=>{
    Comments.findByIdAndRemove(req.params.id, (err, deletedComment)=>{
        res.json(deletedComment)
    })
})

router.put('/:id', (req,res)=>{
    Comments.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedComment)=>{
        res.json(updatedComment)
    })
})

router.post('/', (req,res)=>{
    Comments.create(req.body, (err, createdComment)=>{
        res.json(createdComment)
    })
})

module.exports = router;
