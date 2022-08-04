const jwt = require('jsonwebtoken')
const ApiError = require('../errorsApi/apiError')

module.exports = function(req, res, next){
    if(req.method === 'OPTION'){
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            next(ApiError.badRequest({message : 'Authorization faild'}))
        }        
        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        req.user = decoded 
        next()       
    } catch (error) {
        next(ApiError.badRequest({message : 'Authorization faild'}))
    }



}