const express = require('express');
const filmModel = require('../model/filmModel');
const constants = require('../model/constants');

const router = express.Router();


router.get('/', function (req, res, next){
    res.status(200).send(filmModel.listAll());
});


router.get('/:id', function (req, res, next){
    let resp = filmModel.findById(parseInt(req.params.id));
    res.status(resp? 200 : 404).send(resp ? resp : constants.NOT_FOUND_MESSAGE);
});


router.put('/:id', function (req, res, next){
    let resp = filmModel.updateDescription(parseInt(req.params.id),req.body.description);
    res.status(resp? 200 : 404).send(resp ? constants.SUCESS_MESSAGE : constants.NOT_FOUND_MESSAGE);
});


module.exports = router;