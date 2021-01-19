const express = require('express')
const router = express.Router()
const basic = require('../controllers/basic')

router.get(['/', '/home'], basic.getHome)

router.get('/credits' , basic.getCredits)

module.exports = router