const express = require('express')
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets')


router.post('/flights/:id/tickets', ticketsCtrl.createSeat);

module.exports = router