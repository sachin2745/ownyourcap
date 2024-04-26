const express = require('express');
const router = express.Router();
const Model = require('../model/signupModel');

router.post('/sign', (req , res ) => {
    console.log(req.body);
    new Model(req.body).save()

    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
});


router.post('/authenticate', (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)
     .then((result) => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(401).json({message:"invalide credentials"})
        }
     }).catch((err) => {
        res.status(500).json(err);
     });
});

module.exports = router;