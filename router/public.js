const express = require('express')
const router = express.Router()
const {gethistory,register,editpassword,users,edituser,deleteuser,addjobs,getjobs,getwaybills,editjobs,editwaybills,approvejobs,deletejobs,deletewaybills,gettransporters,addtransporters,deletetransporters,edittransporters,getdrivers, adddrivers,deletedrivers, gettrucks, addtrucks,edittrucks,deletetrucks,editdrivers,gettottrips,getchartdata,getlinechartdata,gettottransp,gettotdrivers,gettottrucks,addfuelrate,getfuelrates,editfuelrate,deletefuelrate,getcargorates,addcargorate,editcargorate,deletecargorate} = require('../controller/public')

const validationsres = require('../middleware/validationsres')
const {RegValidate,PassValidate,EditRegValidate,TrucksValidate, EditTrucksValidate,DriversValidate, EditDriversValidate,TransValidate,EditTransValidate,JobsValidate,EditJobsValidate,FuelValidate,EditFuelValidate,CargoValidate,EditCargoValidate
} = require('../middleware/inputvalidations')


/*########################################
BEGIN HISTORY
########################################*/
router.get('/gethistory', gethistory)
router.get('/gettottrips', gettottrips)
router.get('/getchartdata', getchartdata)
router.get('/getlinechartdata', getlinechartdata)
router.get('/gettottransp', gettottransp)
router.get('/gettotdrivers', gettotdrivers)
router.get('/gettottrucks', gettottrucks)
/*########################################
END HISTORY
########################################*/


/*########################################
BEGIN USERS CRUD OPERATIONS
########################################*/
router.post('/register', RegValidate, validationsres, register)
router.post('/editpassword', PassValidate, validationsres, editpassword)
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
router.get('/getwaybills', getwaybills)
router.post('/addjobs',JobsValidate,validationsres,addjobs)
router.put('/editjobs',EditJobsValidate,validationsres,editjobs)
router.put('/approvejobs',EditJobsValidate,validationsres,approvejobs)
router.delete('/deletejobs/:id',deletejobs)


router.put('/editwaybills',EditJobsValidate,validationsres,editwaybills)
router.delete('/deletewaybills/:id',deletewaybills)
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


/*########################################
BEGIN CARGO CRUD OPERATIONS
########################################*/
router.post('/addcargorate', CargoValidate, validationsres, addcargorate)
router.get('/getcargorates', getcargorates)
router.put('/editcargorate', EditCargoValidate, validationsres, editcargorate)
router.delete('/deletecargorate/:id', deletecargorate)
/*########################################
END CARGO CRUD OPERATIONS
########################################*/


/*########################################
BEGIN FUEL CRUD OPERATIONS
########################################*/
router.post('/addfuelrate', FuelValidate, validationsres, addfuelrate)
router.get('/getfuelrates', getfuelrates)
router.put('/editfuelrate', EditFuelValidate, validationsres, editfuelrate)
router.delete('/deletefuelrate/:id', deletefuelrate)
/*########################################
END FUEL CRUD OPERATIONS
########################################*/


module.exports = router