const ErrorResponse = require('../error/errorResponse')
const {validationResult} = require("express-validator")

function validationsres(req,res,next){
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        errors.array().forEach(v => {
            const {msg} = v
            next(new ErrorResponse(msg, 400))
        })
    }
    next()
}

module.exports = validationsres