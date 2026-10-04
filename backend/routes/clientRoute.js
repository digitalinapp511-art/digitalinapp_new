const {addClient,getClient} = require('../controller/clientController')

const express = require('express')
const router = express.Router()

router.post('/add-client', addClient)
router.get('/clients', getClient)
module.exports = router