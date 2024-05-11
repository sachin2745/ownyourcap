const express = require('express');
const router = express.Router();
const Model = require('../model/signupModel');

router.post('/sign', (req, res) => {
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
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(401).json({ message: "invalide credentials" })
            }
        }).catch((err) => {
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

router.get("/getbyemail/:email", (req, res) => {

    Model.findOne({ email: req.params.email })

        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.error(err)
            res.status(500).json(err);
        });
});

router.get("/getbyid/:id", (req, res) => {

    Model.findById(req.params.id)

        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.err(err)
            res.status(500).json(err);
        });
});

router.put("/update/:id", (req, res) => {

    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })

        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.error(err)
            res.status(500).json(err);
        });
});

router.delete("/delete/:id", (req, res) => {

    Model.findByIdAndDelete(req.params.id)

        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.error(err)
            res.status(500).json(err);
        });
});

router.get("/getbylocation/:location", (req, res) => {

    Model.find({ location: req.params.location })

        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;