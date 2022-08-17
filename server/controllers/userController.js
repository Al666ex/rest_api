const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const ApiError = require('../errorsApi/apiError')
const {User, Basket} = require('../models/models')

const generateToken = (id,email,role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn : '24h'}
    )    
}

class UserController{

    async registration(req,res,next){
        try {
            const {email, password, role} = req.body
            if(!email || !password){
                next(ApiError.badRequest('Input EMAIL and password'))
            }

            const hash = await bcrypt.hash(password, 5)
            const user = await User.create({email, password : hash, role})
            const basket = await Basket.create({userId : user.id})

            const token = generateToken(user.id, user.email, user.role)
            return res.json({token});
                
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async login(req, res, next){
        try {
            const {email, password} = req.body
            const user = await User.findOne({where : {email}})
            if(!user){
                next(ApiError.badRequest('Wrong EMAIL/ Email not found'))
            }

            const compare = bcrypt.compareSync(password, user.password)
            if(!compare){
                next(ApiError.badRequest('Wrong password'))
            }

            const token = generateToken(user.id, user.email, user.role)
            return res.json({token});
                
        } catch (error) {
            next(ApiError.internal(error.message))            
        }
    }

    async check(req, res, next){
        const token = generateToken(req.user.id, req.user.email, req.user.role)    
        return res.json(token); 
    }
}

module.exports = new UserController()
