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

    async getOne(req, res, next){
        const {id} = req.params
        try {
            const brand = await Brand.findOne({where : {id }})
            return res.json(brand) 
        } catch (error) {
            return next(ApiError.badRequest('Cannot get brand'))
        }
    }
}

module.exports = new BrandController()