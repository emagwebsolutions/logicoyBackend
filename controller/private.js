const ErrorResponse = require('../error/errorResponse')
const Users = require('../model/Users')
const History = require('../model/History')
const jwt = require("jsonwebtoken")
exports.Login = async function(req,res,next){
        const {email,password} = req.body
        try{
                const user = await Users.findOne({email}).select("+password")
                if(!user){
                return next(new ErrorResponse("Username is incorrect!", 400))
                }
                const MatchPassword = await user.matchPassword(password)
                if(!MatchPassword){
                return next(new ErrorResponse("Password is incorrect!", 400))
                }
                const fullname = user.getfullname()
                const id = user.getid()
                try{
                        const hist = await History.create({
                            user: fullname,
                            activity: "Logged in to the App",
                            activityid: id
                        })
                }
                catch(err){
                  next(err)
                }
          
                getSignedToken(res,user)

        }
        catch(err){
                next(err)
        }
} 

exports.Protect = async function(req,res,next){
        let token;
      
        if(req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')){
                token = req.headers.authorization.split(" ")[1]
        }
        if(!token){
                next(new ErrorResponse("You are not authorize to access this page", 400))
        }

        const verify = jwt.verify(token,process.env.JWT_SECRET)
        
        try{
                const user = await Users.findById(verify.id)
                if(!user){
                        res.json({
                                success: false,
                                mess: "Access denied!"
                        })
                }
                else{
                        req.user = user._id
                        next()
                }

        }
        catch(err){
                next(err)
        }

}

exports.Authorize = async function(req,res,next){


        if(!req.user){
                return next(new ErrorResponse("Could not fetch user id", 400))
        }

        try{
                const user = await Users.findById(req.user)
                if(user){
                        res.json({
                                success: true,
                                user
                        })
                }
        }
        catch(err){
                next(err)
        }

     
}

const getSignedToken = (res,user)=>{
        const token = user.getSignedJwtToken()
         res.json({success:true, token,user})
}