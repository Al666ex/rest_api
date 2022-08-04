const ApiError = require('../errorsApi/apiError')
const {Brand} = require('../models/models')
class BrandController{

    async create(req,res, next){
        try {
            const {name} = req.body
            const post = await Brand.create({name})
            return await res.json(post)

        } catch (error) {
            return next(ApiError.badRequest('Cannot save Brand'))            
        }

    }

    async getAll(req,res,next){
        try {
            const post = await Brand.findAll()
            return await res.json(post)
        } catch (error) {
            return next(ApiError.badRequest('Cannot get all Brand'))
        }
    }
}

module.exports = new BrandController()