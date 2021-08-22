/*================================
BEGIN CUSTOM EDIT APPRVD JOBS
=================================*/
const editapprovedJobs = async (req,res,Jobs)=>{
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

    try{  
        const approved = 'Yes'
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
            approved,
            creatorid,
            createdby,
            creatorphone
        })
  
        res.json({
            success: true,
            mess: "Data saved successfully!",
            data: jobsp
        })
    }
    catch(err){
        console.log(err)
        return
    }
}
/*================================
END CUSTOM EDIT APPRVD JOBS
=================================*/





/*================================
BEGIN histories
=================================*/
const histories = async (id,messs,createdby,History)=>{ 
    try{
        await History.create({
            user: createdby,
            activity: messs,
            activityid: id
        })
    }
    catch(err){
        console.log(err)
        return
    }
}
/*================================
END histories
=================================*/

module.exports = {editapprovedJobs,histories}

