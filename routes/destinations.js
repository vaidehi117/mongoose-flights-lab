const express = require('express')
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations')


router.post('/movies/:id/reviews', destinationsCtrl.create);

module.exports = router