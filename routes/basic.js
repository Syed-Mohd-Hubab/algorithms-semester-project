const express = require('express')
const router = express.Router()
const basic = require('../controllers/basic')

router.get(['/', '/home'], basic.getHome)

router.get('/lcs', basic.getLCS)

router.get('/scs', basic.getSCS)

router.get('/ld', basic.getLD)

router.get('/lis', basic.getLIS)

router.get('/mcm', basic.getMCM)

router.get('/pp', basic.getPP)

router.get('/rcp', basic.getRCP)

router.get('/ccmp', basic.getCCMP)

router.get('/wbp', basic.getWBP)

module.exports = router