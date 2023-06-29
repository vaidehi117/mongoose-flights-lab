var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

//get '/flights'
router.get('/',flightsCtrl.index);

module.exports = router;
