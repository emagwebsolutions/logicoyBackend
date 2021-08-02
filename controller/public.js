const Users = require('../model/Users')
const Jobs = require('../model/Jobs')
const Drivers = require('../model/Drivers')
const Transporters = require('../model/Transporters')
const History = require('../model/History')
const ErrorResponse = require('../error/errorResponse')

/*#############################################
BEGIN TRANSPORTERS CRUD OPERATIONS
#############################################*/

 exports.gettransporters = async (req,res,next)=>{
    try{
        const transporters = await Transporters.find().sort({"_id":-1})
        res.json({success:true, transporters})
    }
    catch(err){
        next(err)
    }
}

exports.addtransporters = async (req,res,next)=>{
    const {
        transporter,
        tcontact,
        creatorid,
        createdby,
        creatorphone
    } = req.body

    try{
        const user = await Transporters.create({
            transporter,
            tcontact,
            creatorid,
            createdby,
            creatorphone
        })
        res.json({success:true,mess:"Transporter added successfully!"})
    }
    catch(err){
        next(err)
    }
}

 exports.edittransporters = async (req,res,next)=>{
    const {
        transporter,
        tcontact,
        id,
        creatorid,
        createdby,
        creatorphone
    } = req.body

    try{
        const user = await Transporters.findByIdAndUpdate(id, {
            transporter,
            tcontact,
            creatorid,
            createdby,
            creatorphone
        })
        res.json({success:true,mess:"User details updated!"})
    }
    catch(err){
        next(err)
    }
}

exports.deletetransporters = async (req,res,next)=>{
    const id = req.params.id
    try{
        const user = await Transporters.findByIdAndDelete(id)
        res.json({success: true, mess: id})
    }
    catch(err){
        next(err)
    }
}

/*#############################################
END TRANSPORTERS CRUD OPERATIONS
#############################################*/


/*#############################################
BEGIN DRIVERS CRUD OPERATIONS
#############################################*/
exports.getdrivers = async (req,res,next)=>{
    try{
        const drivers = await Drivers.find().sort({"_id":-1})
        res.json({success:true, drivers})
    }
    catch(err){
        next(err)
    }
}

exports.adddrivers = async (req,res,next)=>{
    const {
        dcontact,
        driver,
        license,
        transporter,
        trucknumber,
        tcontact,
        creatorid,
        createdby,
        creatorphone
    
    } = req.body


    try{
        const user = await Drivers.create({
            dcontact,
            driver,
            license,
            transporter,
            trucknumber,
            tcontact,
            creatorid,
            createdby,
            creatorphone
        })
        res.json({success:true,mess:"Driver added successfully!"})
    }
    catch(err){
        next(err)
    }
}

 exports.editdrivers = async (req,res,next)=>{
    const {
        dcontact,
        driver,
        license,
        transporter,
        trucknumber,
        tcontact,
        id,
        creatorid,
        createdby,
        creatorphone
    
    } = req.body
  
    try{
        const user = await Drivers.findByIdAndUpdate(id, {
            dcontact,
            driver,
            license,
            transporter,
            trucknumber,
            tcontact,
            creatorid,
            createdby,
            creatorphone
        })
        res.json({success:true,mess:"Driver details updated!"})
    }
    catch(err){
        next(err)
    }
}

exports.deletedrivers = async (req,res,next)=>{
    const id = req.params.id
    try{
        const user = await Drivers.findByIdAndDelete(id)
        res.json({success: true, mess: id})
    }
    catch(err){
        next(err)
    }
}
/*#############################################
END DRIVERS CRUD OPERATIONS
#############################################*/


/*#############################################
BEGIN USERS CRUD OPERATIONS
#############################################*/

exports.users = async (req,res,next)=>{
    try{
        const users = await Users.find().sort({"_id":-1})
        res.json({success:true, users})
    }
    catch(err){
        next(err)
    }
    
}

exports.register = async (req,res,next)=>{
    const {fullname,phone,hiredate,residence,role,email,password,repassword} = req.body

    
    try{

        const user = await Users.create({
            fullname,
            phone,
            hiredate,
            residence,
            role,
            email,
            password
        })

    
        res.json({success:true,mess:"User added successfully!"})
    }
    catch(err){
        next(err)
    }
}

exports.edituser = async (req,res,next)=>{
    const {fullname,phone,hiredate,residence,role,email,_id} = req.body
  
    
    try{
        const user = await Users.findByIdAndUpdate(_id, {
            fullname,
            phone,
            hiredate,
            residence,
            role,
            email
        })
        res.json({success:true,mess:"User details updated!"})
    }
    catch(err){
        next(err)
    }
}

exports.deleteuser = async (req,res,next)=>{
    const id = req.params.id
    try{
        const user = await Users.findByIdAndDelete(id)
        res.json({success: true, mess: id})
    }
    catch(err){
        next(err)
    }
}
/*#############################################
END USERS CRUD OPERATIONS
#############################################*/



/*#############################################
BEGIN JOBS CRUD OPERATIONS
#############################################*/
exports.getjobs = async (req,res,next)=>{
    try{
        const jobs = await Jobs.find().sort({"_id":-1})
        res.json({
            success: true, jobs
        })
    }
    catch(err){
        next(err)
    }
}

exports.addjobs = async (req,res,next) => {
const {
    fullname,
    transporter,
    tcontact,
    bags,
    destination,
    trucknumber,
    driver,
    dcontact,
    license,
    fuel,
    fuelstation,
    date,
    creatorid,
    createdby,
    creatorphone
} = req.body


try{
    console.log('Hi')
    const jobsp = await Jobs.create({
        fullname,
        transporter,
        tcontact,
        bags,
        destination,
        trucknumber,
        driver,
        dcontact,
        license,
        fuel,
        fuelstation,
        date,
        creatorid,
        createdby,
        creatorphone
    })


    if(!jobsp){
        return next(new ErrorResponse("Data could not be saved!", 400))
    }




    res.json({success: true, mess: "Data saved successfully!"})

}
catch(err){
    next(err)
}


}


exports.deletejobs = async (req,res,next)=>{
    const id = req.params.id
    try{
        const user = await Jobs.findByIdAndDelete(id)
        res.json({success: true, mess: id})
    }
    catch(err){
        next(err)
    }
}

exports.editjobs = async (req,res,next)=>{

    const {
        fullname,
        transporter,
        tcontact,
        bags,
        destination,
        trucknumber,
        driver,
        dcontact,
        license,
        fuel,
        fuelstation,
        date,
        creatorid,
        createdby,
        creatorphone,
        id
    } = req.body
    
    
    try{
        const jobsp = await Jobs.findByIdAndUpdate(id, {
            fullname,
            transporter,
            tcontact,
            bags,
            destination,
            trucknumber,
            driver,
            dcontact,
            license,
            fuel,
            fuelstation,
            date,
            creatorid,
            createdby,
            creatorphone
        })
    
    if(!jobsp){
        return next(new ErrorResponse("Data could not be saved!", 400))
    }
    
    jobsp.capitalize()
    const ids = jobsp.getid()
    jobsp.save()
    
    try{
        const act = `${bags} to ${destination}`
    const hist = await History.create({
        user: createdby,
        activity: `updated Waybill of ${act}`,
        activityid: ids
    })
    }
    catch(err){
        next(err)
    }
    res.json({
        success: true,
        mess: "Data saved successfully!",
        data: jobsp
    })
    
    }
    catch(err){
        next(err)
    }

}

/*#############################################
END HISTORY
#############################################*/






/*#############################################
BEGIN HISTORY
#############################################*/

exports.gethistory = async function gethistory(req,res,next){
    try{
        const data = await History.find().sort({"_id":-1})
        res.json({success:true, data})
    }
    catch(err){
        console.log(err)
    }
}
/*#############################################
END HISTORY
#############################################*/