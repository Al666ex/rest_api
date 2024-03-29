const {Type} = require('../models/models')
const ApiError = require('../errorsApi/apiError')

class TypeController{

    async create(req,res, next){
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res, next){
        try {
            const post = await Type.findAll()            
            return res.json(post)
        } catch (error) {
            return next(ApiError.badRequest('Cannot get all records'))             
        }
    }

    async remove(req, res, next){
        console.log(req.body.id)
        try {
            const {id} = req.body
            console.log(id)
            const post = await Type.destroy({where : {id : id}})
            return await res.json(post)                
        } catch (error) {
            return next(ApiError.badRequest('Cannot remove record from table Brand because ID is not!'))
        }
    }    
}

module.exports = new TypeController()
//