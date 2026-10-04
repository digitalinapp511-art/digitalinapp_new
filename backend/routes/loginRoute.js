const express = require('express')
const { login, register, getAdmin, adminUpdate, adminDelete } = require('../controller/loginController')
const router = express.Router()

router.post('/login', login)
router.post('/admin/add', register)
router.get('/admin/all', getAdmin)
router.put('/admin/update/:id', adminUpdate)
router.delete('/admin/delete/:id', adminDelete)

module.exports = router