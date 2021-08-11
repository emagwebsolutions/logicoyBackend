const Users = require('../model/Users')
const Jobs = require('../model/Jobs')
const Drivers = require('../model/Drivers')
const Trucks = require('../model/Trucks')
const Transporters = require('../model/Transporters')
const History = require('../model/History')
const ErrorResponse = require('../error/errorResponse')
const moment = require("moment")
const ymd = require("../middleware/DateFormats")

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
        email,
        tcontact,
        tcontacttwo,
        tcontactthree,
        contactp,
        contactptwo,
        contactpthree,
        creatorid,
        createdby,
        creatorphone
    } = req.body


    //Email validation
    if(email){
        var re = /\S+@\S+\.\S+/;
        if (re.test(email)) {
            try{
                const fnd = await Transporters.findOne({email})
                if(fnd){
                    res.json({success: false, mess: 'Email is already in use!'})
                    return
                }
            }
            catch(err){
                next(err)
            }
        }
        else{
            res.json({success:false, mess: 'Valid email required!'})
            return 
        }
    }


    //Validate contact person One
    if(contactp) {
        if(!contactp.match(/^[-_ a-zA-Z0-9]+$/)){
           res.json({success: false, mess : 'Valid Contact person required!'})
           return 
        }
    }

    


    //Validate contact person Two
    if(tcontacttwo) {
        if(!tcontacttwo.match(/^[-_ a-zA-Z0-9]+$/)){
            res.json({success: false, mess : 'Valid Contact number two required!'})
            return 
        }
    }

    //Validate contact person Two
    if(contactptwo) {
        if(!contactptwo.match(/^[-_ a-zA-Z0-9]+$/)){
           res.json({success: false, mess : 'Valid Contact person two required!'})
           return 
        }
    }


    //Validate contact person Three
    if(tcontactthree) {
        if(!tcontactthree.match(/^[-_ a-zA-Z0-9]+$/)){
           res.json({success: false, mess : 'Valid Contact number three required!'})
           return 
        }
    }

    //Validate contact person Three
    if(contactpthree) {
        if(!contactpthree.match(/^[-_ a-zA-Z0-9]+$/)){
           res.json({success: false, mess : 'Valid Contact person three required!'})
           return 
        }
    }


    try{
        const user = await Transporters.create({
            transporter,
            email,
            tcontact,
            tcontacttwo,
            tcontactthree,
            contactp,
            contactptwo,
            contactpthree,
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
        email,
        tcontact,
        contactp,
        tcontacttwo,
        contactptwo,
        tcontactthree,
        contactpthree,
        id,
        creatorid,
        createdby,
        creatorphone
    } = req.body


    
    //Validate contact person One
    if(contactp) {
        if(!contactp.match(/^[-_ a-zA-Z0-9]+$/)){
           res.json({success: false, mess : 'Valid Contact person required!'})
           return 
        }
    }

    


    //Validate contact person Two
    if(tcontacttwo) {
        if(!tcontacttwo.match(/^[-_ a-zA-Z0-9]+$/)){
            res.json({success: false, mess : 'Valid Contact number two required!'})
            return 
        }
    }

    //Validate contact person Two
    if(contactptwo) {
        if(!contactptwo.match(/^[-_ a-zA-Z0-9]+$/)){
           res.json({success: false, mess : 'Valid Contact person two required!'})
           return 
        }
    }


    //Validate contact person Three
    if(tcontactthree) {
        if(!tcontactthree.match(/^[-_ a-zA-Z0-9]+$/)){
           res.json({success: false, mess : 'Valid Contact number three required!'})
           return 
        }
    }

    //Validate contact person Three
    if(contactpthree) {
        if(!contactpthree.match(/^[-_ a-zA-Z0-9]+$/)){
           res.json({success: false, mess : 'Valid Contact person three required!'})
           return 
        }
    }

    try{
        const user = await Transporters.findByIdAndUpdate(id, {
            transporter,
            email,
            tcontact,
            contactp,
            tcontacttwo,
            contactptwo,
            tcontactthree,
            contactpthree,
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
        creatorid,
        createdby,
        creatorphone
    
    } = req.body


    try{
        const user = await Drivers.create({
            dcontact,
            driver,
            license,
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
BEGIN TRUCKS CRUD OPERATIONS
#############################################*/
exports.gettrucks = async (req,res,next)=>{
    try{
        const trucks = await Trucks.find().sort({"_id":-1})
        res.json({success:true, trucks})
    }
    catch(err){
        next(err)
    }
}

exports.addtrucks = async (req,res,next)=>{
    const {
        truckname,
        tcontact,
        transporter,
        trucknumber,
        creatorid,
        createdby,
        creatorphone
    
    } = req.body


    try{
        const user = await Trucks.create({
            truckname,
            tcontact,
            transporter,
            trucknumber,
            creatorid,
            createdby,
            creatorphone
        })
        res.json({success:true,mess:"Truck added successfully!"})
    }
    catch(err){
        next(err)
    }
}

 exports.edittrucks = async (req,res,next)=>{
    const {
        truckname,
        tcontact,
        transporter,
        trucknumber,
        id,
        creatorid,
        createdby,
        creatorphone
    } = req.body
  
    try{
        const user = await Trucks.findByIdAndUpdate(id, {
            truckname,
            tcontact,
            transporter,
            trucknumber,
            creatorid,
            createdby,
            creatorphone
        })
        res.json({success:true,mess:"Trucks details updated!"})
    }
    catch(err){
        next(err)
    }
}

exports.deletetrucks = async (req,res,next)=>{
    const id = req.params.id
    try{
        const trucks = await Trucks.findByIdAndDelete(id)
        res.json({success: true, mess: id})
    }
    catch(err){
        next(err)
    }
}
/*#############################################
END TRUCKS CRUD OPERATIONS
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
    customer,
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

/*--------------------------------------
BEGIN FUEL AND FUEL STATION VALIDATION
--------------------------------------*/
if(fuel) {
    if(!fuelstation){
      res.json({success: false, mess: 'Fuel Station field required!'})
      return 
    }
}
if(fuelstation){
    if(!fuel){
      res.json({success: false, mess: 'Fuel field required!'})
      return
    }
}
/*--------------------------------------
END FUEL AND FUEL STATION VALIDATION
--------------------------------------*/

try{

    const jobsp = await Jobs.create({
        fullname,
        customer,
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
    const id = jobsp.getid()
    jobsp.save()


    try{
        const act = `${bags} to ${destination}`
    const hist = await History.create({
        user: createdby,
        activity: `added Waybill of ${act}`,
        activityid: id
    })
    }
    catch(err){
        next(err)
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
        customer,
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
    
    
/*--------------------------------------
BEGIN FUEL AND FUEL STATION VALIDATION
--------------------------------------*/
if(fuel) {
    if(!fuelstation){
      res.json({success: false, mess: 'Fuel Station field required!'})
      return 
    }
}
if(fuelstation){
    if(!fuel){
      res.json({success: false, mess: 'Fuel field required!'})
      return
    }
}
/*--------------------------------------
END FUEL AND FUEL STATION VALIDATION
--------------------------------------*/

    try{
        const jobsp = await Jobs.findByIdAndUpdate(id, {
            fullname,
            customer,
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

exports.getchartdata = async (req,res,next)=>{
    const std = moment().startOf("week")
    const end = moment().endOf("week")
    const startdate = new Date(std)
    const enddate = new Date(end)
    try{
      const data = await Jobs.find({date : {$gte: new Date(startdate), $lte: new Date(enddate)} })
      if(res){
        res.json({success:true, output:data})
      }
    }
    catch(err){
        console.log(err)
    }
}

exports.gettottrips = async (req,res,next)=>{
    const std = moment().startOf("month")
    const end = moment().endOf("month")
    const startdate = new Date(std)
    const enddate = new Date(end)
    try{
      const data = await Jobs.find({date : {$gte: new Date(startdate), $lte: new Date(enddate)} }).countDocuments()
      if(res){
        res.json({success:true, output:data})
      }
    }
    catch(err){
        console.log(err)
    }
}
exports.gettottransp = async (req,res,next)=>{
    const std = moment().startOf("month")
    const end = moment().endOf("month")
    const startdate = new Date(std)
    const enddate = new Date(end)
    try{
      const data = await Transporters.find({date : {$gte: new Date(startdate), $lte: new Date(enddate)} }).countDocuments()
      if(res){
          res.json({success:true, output:data})
      }
    }
    catch(err){
        console.log(err)
    }
}
exports.gettottrucks = async (req,res,next)=>{
    const std = moment().startOf("month")
    const end = moment().endOf("month")
    const startdate = new Date(std)
    const enddate = new Date(end)
    try{
      const data = await Trucks.find({date : {$gte: new Date(startdate), $lte: new Date(enddate)} }).countDocuments()
      if(res){
        res.json({success:true, output:data})
      }
    }
    catch(err){
        console.log(err)
    }
}



/*#############################################
END HISTORY
#############################################*/



