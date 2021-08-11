const express = require('express')
const router = express.Router()
const {gethistory,register,users,edituser,deleteuser,addjobs,getjobs,editjobs,deletejobs,gettransporters,addtransporters,deletetransporters,edittransporters,getdrivers, adddrivers,deletedrivers, gettrucks, addtrucks,edittrucks,deletetrucks,editdrivers,gettottrips,getchartdata,gettottransp,gettottrucks} = require('../controller/public')

const validationsres = require('../middleware/validationsres')
const {RegValidate,EditRegValidate,TrucksValidate, EditTrucksValidate,DriversValidate, EditDriversValidate,TransValidate,EditTransValidate,JobsValidate,EditJobsValidate} = require('../middleware/inputvalidations')

/*########################################
BEGIN HISTORY
########################################*/
router.get('/gethistory', gethistory)
router.get('/gettottrips', gettottrips)
router.get('/getchartdata', getchartdata)
router.get('/gettottransp', gettottransp)
router.get('/gettottrucks', gettottrucks)
/*########################################
END HISTORY
########################################*/

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
router.post('/addjobs',JobsValidate,validationsres,addjobs)
router.put('/editjobs',EditJobsValidate,validationsres,editjobs)
router.delete('/deletejobs/:id',deletejobs)
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
BEGIN TRUCKS CRUD OPERATIONS
########################################*/
router.get('/gettrucks', gettrucks)
router.post('/addtrucks', TrucksValidate, validationsres, addtrucks)
router.delete('/deletetrucks/:id',deletetrucks)
router.put('/edittrucks', EditTrucksValidate, validationsres, edittrucks)
/*########################################
END TRUCKS CRUD OPERATIONS
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