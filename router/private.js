const express = require('express')
const Users = require('../model/Users')
const router = express.Router()
const {LoginValidate} = require('../middleware/inputvalidations')
const validationsres = require('../middleware/validationsres')
const {Login,Protect,Authorize} = require('../controller/private')

router.post('/Login',LoginValidate, validationsres, Login)
router.get('/authorize', Protect,Authorize)
module.exports = router
