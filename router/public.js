const express = require('express')
const router = express.Router()
const {gethistory,register,users,edituser,deleteuser,addjobs,getjobs,editjobs,deletejobs,gettransporters,addtransporters,deletetransporters,edittransporters,getdrivers, adddrivers,deletedrivers, gettrucks, addtrucks,edittrucks,deletetrucks,editdrivers} = require('../controller/public')
const validationsres = require('../middleware/validationsres')
const {RegValidate,EditRegValidate,TrucksValidate, EditTrucksValidate,DriversValidate, EditDriversValidate,TransValidate,EditTransValidate,JobsValidate,EditJobsValidate} = require('../middleware/inputvalidations')
const moment = require("moment")
const ymd = require("../middleware/DateFormats")

const Jobs = require('../model/Jobs')

router.get('/test', async (req,res,next)=>{

 
    try{
        const stofwk = moment().startOf('week')
        const endofwk = moment().endOf('week')

        const stfwk =  ymd(stofwk)
        const enofwk =  ymd(endofwk)
 
        const ds = new Date()
        const ss = ds.getMonth()+1
        const dc = (Number(ss) < 10)? "0"+ss : ss
        const dd = Number(dc)

        const jb = await Jobs.find({date : new Date(dd)}).sort({date: 1})
        if(jb){
            console.log(dd)
            res.json({success:true, mess: jb}) 
        }
    } 
    catch(err){
        next(err)
    }
})




/*########################################
BEGIN HISTORY
########################################*/
router.get('/gethistory', gethistory)
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