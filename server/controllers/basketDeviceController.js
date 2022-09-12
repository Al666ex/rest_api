
const {BasketDevice} = require('../models/models')
const ApiError = require('../errorsApi/apiError')

class BasketDeviceController{
    async create(req, res, next){
        try {
            const {basketId, deviceId} = req.body
            const post = await BasketDevice.create({basketId, deviceId})
            return res.json(post)                
        } catch (error) {
            return next(ApiError.badRequest('Cannot save data in BasketDevice'))
        }
    }

    async getAll(req, res, next){
        try {
            const {basketId} = req.body
            const basket = await BasketDevice.findAll({where : {basketId}}) 
            return res.json(basket)          
        } catch (error) {
            return next(ApiError.badRequest('Cannot get all data from BasketDevice'))
        }        
    }
}

module.exports = new BasketDeviceController();

