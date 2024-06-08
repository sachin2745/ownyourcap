const express = require('express');
const router = express.Router();
const Model = require('../model/userModel');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');

router.post('/add', (req, res) => {
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
        //match that email and password exists in the database
        .then((result) => {
            if (result)
            //  res.status(200).json(result)
            {
                const { _id, email, firstName, lastName, avatar, role } = result;
                const payload = { _id, email, role };

                //create jwt token
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '3 days'
                    },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json(err);
                        } else {
                            res.status(200).json({ token, email, avatar, firstName, lastName,  role });
                        }
                    }
                )
            }
            else res.status(401).json({ message: 'login failed' })

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



//for OTP verification
router.get('/getbyemail/:email', (req, res) => {
    Model.findOne({ email: req.params.email })
        .then((result) => {
            if (result) res.json(result);
            else res.status(404).json({ message: 'not found' });
        }).catch((err) => {
            console.log(err)
            res.json(err)
        });
});
router.get('/getbyid/:id', (req, res) => {

    Model.findById(req.params.id)

        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.err(err)
            res.status(500).json(err);
        });
});

router.put("/update/:id",  (req, res) => {

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