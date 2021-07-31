const express = require('express')
const router = express.Router()
const {register,users,edituser,deleteuser,savejobs,getjobs,editjobs,deletejobs,gethistory,gettransporters,addtransporters,deletetransporters,edittransporters,getdrivers, adddrivers,deletedrivers, editdrivers} = require('../controller/public')
const validationsres = require('../middleware/validationsres')
const {RegValidate,EditRegValidate,DriversValidate, EditDriversValidate,TransValidate,EditTransValidate,JobsValidate,EditJobsValidate} = require('../middleware/inputvalidations')

/*########################################
BEGIN USERS CRUD OPERATIONS
########################################*/
router.post('/register', RegValidate, validationsres, register)
router.get('/users', users)
router.put('/edituser', EditRegValidate, validationsres, edituser)
router.delete('/deleteuser/:id', deleteuser)
/*########################################
END USERS CRUD OPERATIONS
########################################*/

/*########################################
BEGIN JOBS CRUD OPERATIONS
########################################*/
router.get('/getjobs', getjobs)
router.post('/savejobs',JobsValidate,validationsres,savejobs)
router.put('/editjobs',EditJobsValidate,validationsres,editjobs)
router.delete('/deletejobs',deletejobs)
/*########################################
END JOBS CRUD OPERATIONS
########################################*/

/*########################################
BEGIN DRIVERS CRUD OPERATIONS
########################################*/
router.get('/getdrivers', getdrivers)
router.post('/adddrivers', DriversValidate, validationsres, adddrivers)
router.delete('/deletedrivers/:id',deletedrivers)
router.put('/editdrivers', EditDriversValidate, validationsres, editdrivers)
/*########################################
END DRIVERS CRUD OPERATIONS
########################################*/


/*########################################
BEGIN TRANSPORTERS CRUD OPERATIONS
########################################*/
router.get('/gettransporters', gettransporters)
router.post('/addtransporters', TransValidate, validationsres, addtransporters)
router.delete('/deletetransporters/:id',deletetransporters)
router.put('/edittransporters', EditTransValidate, validationsres, edittransporters)
/*########################################
END TRANSPORTERS CRUD OPERATIONS
########################################*/





module.exports = router