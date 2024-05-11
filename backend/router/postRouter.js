const express = require('express');
const router = express.Router();
const Model = require('../model/postModel');

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save() //save date in mongoDB
        .then((result) => {
            res.status(200).json(result);  //200 status means successfull
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err); //500 status means server side error 
        });

});

//request accept and show all data
router.get('/getall', (req, res) => {

    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
// : denotes url parameter
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})
// updating...
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get("/getbyid/:id",(req,res)=>{

    Model.findById(req.params.id)

    .then((result)=>{
        res.json(result);

    }).catch((err)=>{
        console.error(err)
        res.status(500).json(err);
    });
});


router.get("/getbycategory/:category",(req,res)=>{

    Model.find({category: req.params.category})

    .then((result)=>{
        res.json(result);

    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;