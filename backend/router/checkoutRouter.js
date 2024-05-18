const express = require('express');
const router = express.Router();
const Model = require('../model/checkoutModel');
const verifyToken = require('./verifyToken');

router.post('/add', verifyToken, (req, res) => {
    console.log(req.body);
    new Model(req.body).save()

        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);

        });
});

router.get("/getall", (req, res) => {

    Model.find({})

        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.error(err)
            res.status(500).json(err);
        });

});


router.get("/getbyid/:id", verifyToken, (req, res) => {

    Model.findById(req.params.id)

        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.err(err)
            res.status(500).json(err);
        });
});

module.exports = router;