const express = require('express')
const router = express.Router()
const basic = require('../controllers/basic')

router.get(['/', '/home'], basic.getHome)

module.exports = router