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

router.get('/:dataset/lcs', algo.getLCS)

router.get('/:dataset/scs', algo.getSCS)

router.get('/:dataset/ld', algo.getLD)

router.get('/:dataset/lis', algo.getLIS)

router.get('/:dataset/mcm', algo.getMCM)

router.get('/:dataset/01kp', algo.get01KP)

router.get('/:dataset/pp', algo.getPP)

router.get('/:dataset/rcp', algo.getRCP)

router.get('/:dataset/ccmp', algo.getCCMP)

router.get('/:dataset/wbp', algo.getWBP)

module.exports = router