const express = require('express')
const router = express.Router()
const algo = require('../controllers/algo')

router.get('/a', algo.getdataseta)

router.get('/b', algo.getdatasetb)

router.get('/c', algo.getdatasetc)

router.get('/d', algo.getdatasetd)

router.get('/e', algo.getdatasete)

router.get('/f', algo.getdatasetf)

router.get('/g', algo.getdatasetg)

router.get('/h', algo.getdataseth)

router.get('/i', algo.getdataseti)

router.get('/j', algo.getdatasetj)

router.get('/lcs', algo.getLCS)

router.get('/scs', algo.getSCS)

router.get('/ld', algo.getLD)

router.get('/lis', algo.getLIS)

router.get('/mcm', algo.getMCM)

router.get('/01kp', algo.get01KP)

router.get('/pp', algo.getPP)

router.get('/rcp', algo.getRCP)

router.get('/ccmp', algo.getCCMP)

router.get('/wbp', algo.getWBP)

module.exports = router