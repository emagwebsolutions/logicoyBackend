const Users = require('../model/Users')
const Jobs = require('../model/Jobs')
const Waybills = require('../model/Waybills')
const Drivers = require('../model/Drivers')
const Trucks = require('../model/Trucks')
const Cargorates = require('../model/Cargorates')
const Fuelrates = require('../model/Fuelrates')
const Transporters = require('../model/Transporters')
const History = require('../model/History')
const ErrorResponse = require('../error/errorResponse')
const moment = require("moment")
const ymd = require("../middleware/DateFormats")
const {editapprovedJobs,histories} = require("../middleware/snippets")
const bcrypt = require("bcryptjs")

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

    
    /*=================================
    BEGIN VALIDATION
    ==================================*/
        //Email validation
        if(email){
            var re = /\S+@\S+\.\S+/;
            if (re.test(email)) {
                try{
                    const fnd = await Transporters.findOne({email})
                    if(fnd){ 
                        if(fnd.length > 0){
                            res.json({success: false, mess: 'Email is already in use!'})
                            return
                        }
                    }
                }
                catch(err){
                    console.log(err)
                    return
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

    /*=================================
    END VALIDATION
    ==================================*/


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

       
    /*=================================
    BEGIN VALIDATION
    ==================================*/
        //Email validation
        if(email){
            var re = /\S+@\S+\.\S+/;
            if (re.test(email)) {
                try{
                    const fnd = await Transporters.findOne({email})
                    if(fnd){ 
                        if(fnd.length > 0){
                            res.json({success: false, mess: 'Email is already in use!'})
                            return
                        }
                    }
                }
                catch(err){
                    console.log(err)
                    return
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

    /*=================================
    END VALIDATION
    ==================================*/

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

    if(dcontact){
        if(dcontact.length < 10){
            res.json({success:false, mess: 'Contact number must be 10 or more!'})
            return
        }
    }

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

    if(dcontact){
        if(dcontact.length < 10){
            res.json({success:false, mess: 'Contact number must be 10 or more!'})
            return
        }
    }
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
        tcontact,
        transporter,
        trucknumber,
        creatorid,
        createdby,
        creatorphone
    
    } = req.body
    try{
        const user = await Trucks.create({
            
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

exports.editpassword = async (req,res,next)=>{
    const {password,id} = req.body
    try{
        const salt = await bcrypt.genSalt(10);
        const passwords = await bcrypt.hash(password, salt);
        await Users.findByIdAndUpdate(id, {password: passwords})
        res.json({success:true,mess:"Password updated successfully!"})
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
    type2,
    creatorid,
    createdby,
    creatorphone
} = req.body

/*--------------------------------------
BEGIN FUEL AND FUEL STATION VALIDATION
--------------------------------------*/
//Check if customer job already exist
    try{
    const dts = new Date(date)
    const data = await Jobs.findOne({driver,destination,date: new Date(dts)})
    if(data){ 
        if(data.length > 0){
            res.json({success: false, mess: "This job already exists!"})
            return
        }
    }
    }
    catch(err){
        console.log(err)
        return
    }
    
if(license){
    if (!license.match(/^[A-Za-z0-9 .,'!&-]+$/)) {
        res.json({success: false, mess: "Valid license required!"})
        return
    }
}

if(fuel) {
    if(!fuelstation){
      res.json({success: false, mess: 'Fuel Station field required!'})
      return 
    }
    if(!type2){
        res.json({success: false, mess: 'Type field required!'})
        return 
    }
}


if(fuelstation){
    if(!fuel){
      res.json({success: false, mess: 'Fuel field required!'})
      return
    }
    if(!type2){
        res.json({success: false, mess: 'Type field required!'})
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
        type2,
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

    //HISTORY 
    const tg = fullname.toLowerCase() === 'olam'? 'bags' : 'tonage'
    const messs = `added new job of ${bags} ${tg} going to ${destination}`
    histories(id,messs,createdby,History)

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
        type2,
        creatorid,
        createdby,
        creatorphone,
        id
    } = req.body

    /*--------------------------------------
    BEGIN EDIT JOB VALIDATION
    --------------------------------------*/
   //Check if customer job already exist


    try{
        const dt = new Date(date)
    const data = await Jobs.findOne({driver,destination, date: new Date(dt),_id: {$ne: id}})
    if(data){ 
        if(data.length > 0){
            res.json({success: false, mess: "This job already existsxx!"})
            return
        }
    }
    }
    catch(err){
        console.log(err)
        return
    }
    
        
    if(license){
        if (!license.match(/^[A-Za-z0-9 .,'!&-]+$/)) {
            res.json({success: false, mess: "Valid license required!"})
            return
        }
    }

    if(fuel) {
        if(!fuelstation){
        res.json({success: false, mess: 'Fuel Station field required!'})
        return 
        }
        if(!type2){
            res.json({success: false, mess: 'Type field required!'})
            return 
        }
    }


    if(fuelstation){
        if(!fuel){
        res.json({success: false, mess: 'Fuel field required!'})
        return
        }
        if(!type2){
            res.json({success: false, mess: 'Type field required!'})
            return 
        }
    }
    /*--------------------------------------
    END EDIT JOB VALIDATION
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
            type2,
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

    //HISTORY 
    const tg = fullname.toLowerCase() === 'olam'? 'bags' : 'tonage'
    const messs = `updated job of ${bags} ${tg} going to ${destination}`
    histories(id,messs,createdby,History)



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
END JOBS
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


exports.getlinechartdata = async (req,res,next)=>{
    const std = moment().startOf("year")
    const end = moment().endOf("year")
    const startdate = new Date(std)
    const enddate = new Date(end)
    try{
      const data = await Jobs.find({date : {$gte: new Date(startdate), $lte: new Date(enddate)} })
      if(data){
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
      if(data){
        res.json({success:true, output:data})
      }
    }
    catch(err){
        console.log(err)
    }
}

exports.gettotdrivers = async (req,res,next)=>{
    const std = moment().startOf("month")
    const end = moment().endOf("month")
    const startdate = new Date(std)
    const enddate = new Date(end)
    try{
      const data = await Drivers.find({createdAt : {$gte: new Date(startdate), $lte: new Date(enddate)} }).countDocuments()
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
      const data = await Transporters.find({createdAt : {$gte: new Date(startdate), $lte: new Date(enddate)} }).countDocuments()
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
      const data = await Trucks.find({createdAt : {$gte: new Date(startdate), $lte: new Date(enddate)} }).countDocuments()
      if(data){
        res.json({success:true, output: data})
      }
    }
    catch(err){
        console.log(err)
    }
}

/*#############################################
END HISTORY
#############################################*/

/*#############################################
BEGIN CARGO CRUD OPERATIONS
#############################################*/

exports.getcargorates = async (req,res,next)=>{
    try{
        const cargo = await Cargorates.find().sort({"_id":-1})
        res.json({success:true, cargo})
    }
    catch(err){
        next(err)
    }
}

exports.addcargorate = async (req,res,next)=>{
    const {
        owner,
        type,
        destination,
        rate
    } = req.body
    try{
        const user = await Cargorates.create({
            owner,
            type,
            destination,
            rate
        })
        res.json({success:true,mess:"Cargo rate added successfully!"})
    }
    catch(err){
        next(err)
    }
}

 exports.editcargorate = async (req,res,next)=>{
    const {
        owner,
        type,
        destination,
        rate,
        id
    } = req.body

    try{ 
        const user = await Cargorates.findByIdAndUpdate(id, {
            owner,
            type,
            destination,
            rate
        })
        res.json({success:true,mess:"Cargo rate details updated!"})
    }
    catch(err){
        next(err)
    }
}

exports.deletecargorate = async (req,res,next)=>{
    const id = req.params.id
    try{
        const user = await Cargorates.findByIdAndDelete(id)
        res.json({success: true, mess: id})
    }
    catch(err){
        next(err)
    }
}

/*#############################################
END CARGO CRUD OPERATIONS
#############################################*/


/*#############################################
BEGIN FUEL RATES CRUD OPERATIONS
#############################################*/

exports.getfuelrates = async (req,res,next)=>{
    try{
        const fuel = await Fuelrates.find().sort({"_id":-1})
        res.json({success:true, fuel})
    }
    catch(err){
        next(err)
    }
}

exports.addfuelrate = async (req,res,next)=>{
    const {
        litre,
        fuelstation,
        rate
    } = req.body
    try{
        const user = await Fuelrates.create({
            litre,
            fuelstation,
            rate
        })
        res.json({success:true,mess:"Cargo rate added successfully!"})
    }
    catch(err){
        next(err)
    }
}

exports.editfuelrate = async (req,res,next)=>{
    const {
        litre,
        fuelstation,
        rate,
        id
    } = req.body
    try{
         await Fuelrates.findByIdAndUpdate(id, {
            litre,
            fuelstation,
            rate
        })
        res.json({success:true,mess:"Fuel rate details updated!"})
    }
    catch(err){
        next(err)
    }
}

exports.deletefuelrate = async (req,res,next)=>{
    const id = req.params.id
    try{
        const user = await Fuelrates.findByIdAndDelete(id)
        res.json({success: true, mess: id})
    }
    catch(err){
        next(err)
    }
}
/*#############################################
END FUEL RATES CRUD OPERATIONS
#############################################*/


/*#############################################
BEGIN APPROVE JOBS
#############################################*/

exports.getwaybills = async (req,res,next)=>{
    try{
        const jobs = await Waybills.find().sort({"_id":-1})
        res.json({
            success: true, jobs
        })
    }
    catch(err){
        next(err)
    }
}



exports.approvejobs = async (req,res,next)=>{
        var {
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
            type2,
            creatorid,
            createdby,
            creatorphone,
            id
        } = req.body
    /*--------------------------------------
    BEGIN EDIT JOB VALIDATION
    --------------------------------------*/
   //Check if customer job already exist

    try{
        const dt = new Date(date)
    const data = await Jobs.findOne({driver,destination, date: new Date(dt),_id: {$ne: id}})
    if(data){
        if(data.length > 0){
            res.json({success: false, mess: "This job already existsxx!"})
            return
        }
    }

    }
    catch(err){
        console.log(err)
        return
    }
    
        
    if(license){
        if (!license.match(/^[A-Za-z0-9 .,'!&-]+$/)) {
            res.json({success: false, mess: "Valid license required!"})
            return
        }
    }

    if(fuel) {
        if(!fuelstation){
        res.json({success: false, mess: 'Fuel Station field required!'})
        return 
        }
        if(!type2){
            res.json({success: false, mess: 'Type field required!'})
            return 
        }
    }


    if(fuelstation){
        if(!fuel){
        res.json({success: false, mess: 'Fuel field required!'})
        return
        }
        if(!type2){
            res.json({success: false, mess: 'Type field required!'})
            return 
        }
    }
    /*--------------------------------------
    END EDIT JOB VALIDATION
    --------------------------------------*/
        
        //Get fuelstation from fuelrates collection
        try{
            var fuels = await Fuelrates.findOne({fuelstation})
        }
        catch(err){
            console.log(err)
        }
    
        //Get Cargo owner and destination from cargorates table
        try{
          const cargo = await Cargorates.findOne({$and : [{owner: fullname},{destination}]})

          //Validate for cargo and fuel availability
            if(cargo){ 
            let fuel_cost
            let fuel_rate           
            if(fuel && fuelstation){
                if(fuels){
                    fuel_rate = fuels.rate

                    if(type2 === 'Cash'){
                        fuel_cost = fuel
                        fuel = fuel/fuel_rate
                    }
                    else{
                        fuel_cost = fuel * fuels.rate
                    }                   
                }
                else{
                    res.json({
                        success: false,
                        mess: `${fuelstation} fuel rate does not eists!`
                    })
                    return
                }
            }
            else{
                fuel_cost = 0
                fuel_rate = 0
            }
        

          const trans_cost = bags * cargo.rate
          const type = cargo.type
          const cargo_rate = cargo.rate

          const obb = {
                    fullname,
                    customer,
                    transporter,
                    tcontact,
                    bags,
                    type,
                    type2,
                    cargo_rate,
                    trans_cost,
                    destination,
                    trucknumber,
                    driver,
                    dcontact,
                    license,
                    fuelstation,
                    fuel,
                    fuel_rate,
                    fuel_cost,
                    date,
                    createdby
          }

          const wayb = await Waybills.create(obb)
        }
        else{
            res.json({
            success: false,
            mess: `${destination} cargo rate does not exists!`
            })
            return
        }

    }
    catch(err){
        next(err)
    }

    editapprovedJobs(req,res,Jobs)
}



exports.editwaybills = async (req,res,next)=>{
        var {
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
            type2,
            date,
            payment,
            id
        } = req.body
    /*--------------------------------------
    BEGIN EDIT JOB VALIDATION
    --------------------------------------*/
   //Check if customer job already exist

    try{
        const dt = new Date(date)
const data = await Jobs.findOne({driver,destination,date: new Date(dt),_id: {$ne: id}})
        if(data){ 
            if(data.length > 0){
                res.json({success: false, mess: "This job already existsxx!"})
                return
            }
           
        }
    }
    catch(err){
        console.log(err)
        return
    }
    
        
    if(license){
        if (!license.match(/^[A-Za-z0-9 .,'!&-]+$/)) {
            res.json({success: false, mess: "Valid license required!"})
            return
        }
    }

    if(fuel) {
        if(!fuelstation){
        res.json({success: false, mess: 'Fuel Station field required!'})
        return 
        }
        if(!type2){
            res.json({success: false, mess: 'Type field required!'})
            return 
        }
    }


    if(fuelstation){
        if(!fuel){
        res.json({success: false, mess: 'Fuel field required!'})
        return
        }
        if(!type2){
            res.json({success: false, mess: 'Type field required!'})
            return 
        }
    }
    /*--------------------------------------
    END EDIT JOB VALIDATION
    --------------------------------------*/
        
        //Get fuelstation from fuelrates collection
        try{
            var fuels = await Fuelrates.findOne({fuelstation})
        }
        catch(err){
            console.log(err)
        }
    
        //Get Cargo owner and destination from cargorates table
        try{
          const cargo = await Cargorates.findOne({$and : [{owner: fullname},{destination}]})

          //Validate for cargo and fuel availability
            if(cargo){ 
            let fuel_cost
            let fuel_rate           
            if(fuel && fuelstation){
                if(fuels){
                    fuel_rate = fuels.rate

                    if(type2 === 'Cash'){
                        fuel_cost = fuel
                        fuel = fuel/fuel_rate
                    }
                    else{
                        fuel_cost = fuel * fuels.rate
                    }                   
                }
                else{
                    res.json({
                        success: false,
                        mess: `${fuelstation} fuel rate does not eists!`
                    })
                    return
                }
            }
            else{
                fuel_cost = 0
                fuel_rate = 0
            }
        

          const trans_cost = bags * cargo.rate
          const type = cargo.type
          const cargo_rate = cargo.rate

          const obb = {
                    fullname,
                    customer,
                    transporter,
                    tcontact,
                    bags,
                    type,
                    type2,
                    cargo_rate,
                    trans_cost,
                    destination,
                    trucknumber,
                    driver,
                    dcontact,
                    license,
                    fuelstation,
                    fuel,
                    fuel_rate,
                    fuel_cost,
                    date,
                    payment
          }
          
          const wayb = await Waybills.findByIdAndUpdate(id,obb)
        }
        else{
            res.json({
            success: false,
            mess: `${destination} cargo rate does not exists!`
            })
            return
        }

    }
    catch(err){
        next(err)
    }

    editapprovedJobs(req,res,Jobs)
}



exports.deletewaybills = async (req,res,next)=>{
    const id = req.params.id
    try{
        const user = await Waybills.findByIdAndDelete(id)
        res.json({success: true, mess: id})
    }
    catch(err){
        next(err)
    }
}

/*#############################################
END APPROVE JOBS
#############################################*/









