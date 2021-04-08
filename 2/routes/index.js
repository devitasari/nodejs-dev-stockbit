const express = require('express')
const router = express.Router()
const LogController = require('../controllers')
const logger = require('../middleware/logger')

router.get(`/search`, logger, LogController.search)
router.get(`/detail`, logger, LogController.detail)


module.exports = router