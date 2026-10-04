const getDasboard = require('../controller/dashboardController')
const express = require('express')
const router = express.Router()

router.get('/dashboard', getDasboard)


module.exports = router