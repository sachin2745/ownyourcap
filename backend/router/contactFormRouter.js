const express = require('express');
const router = express.Router();
const Model = require('../model/contactFormModel');

router.post('/contact', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()

    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
});
