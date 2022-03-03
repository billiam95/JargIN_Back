const express = require('express');
const router = express.Router();
const Resources = require('../models/resources.js')

router.get('/', (req,res)=>{
    Resources.find({}, (err, foundResources)=>{
        res.json(foundResources)
    })
})

router.delete('/:id', (req,res)=>{
    Resources.findByIdAndRemove(req.params.id, (err, deletedResource)=>{
        res.json(deletedResource)
    })
})

router.put('/id:', (req,res)=>{
    Resources.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedResource)=>{
        res.json(updatedResource)
    })
})

router.post('/', (req,res)=>{
    Resources.create(req.body, (err, createdResource)=>{
        res.json(createdResource)
    })
})

module.exports = router;
