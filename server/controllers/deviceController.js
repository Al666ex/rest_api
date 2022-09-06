const {v4} = require('uuid')
const path = require('path')
const ApiError = require('../errorsApi/apiError')
const {Device, DeviceInfo} = require('../models/models')

class DeviceController{
    async create(req, res, next){
        try {
            let {name, price, typeId, brandId, info} = req.body       
            const {img} = req.files
            const fileName = v4()+'.jpg'
            img.mv(path.resolve('static' ,fileName))

            
            const device = await Device.create({name, price, typeId, brandId, img : fileName})

            info = info.trim()
            info = JSON.parse(info)
    
            info.forEach(i => {
                DeviceInfo.create({
                    title : i.title,
                    description : i.description,
                    deviceId : device.id
                })
            })

            return res.json(device)
                
        } catch (error) {                       
            next(ApiError.badRequest(error.message))            
        }
        
    }

    async getOne(req, res, next){
        try {
            const {id} = req.params
            const device = await Device.findOne({
                where :{id},
                include : [{model : DeviceInfo, as: 'info'}]
            })

            res.json(device)
            
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }

    async getAll(req, res, next){
        try {
            let {typeId, brandId, page, limit} = req.query
            limit = limit || 9
            page = page || 1

            let offset = page * limit - limit
            let find

            if(typeId && brandId){
                find = await Device.findAndCountAll({where : {typeId, brandId}, limit, offset})
            }
            if(!typeId && brandId){
                find = await Device.findAndCountAll({where :{brandId}, limit, offset })
            }
            if(typeId && !brandId){
                find = await Device.findAndCountAll({where : {typeId}, limit, offset})
            }
            if(!typeId && !brandId){
                find = await Device.findAndCountAll({limit, offset})
            }                
            return res.json(find)            
        } catch (error) {
            next(ApiError.badRequest(error.message))            
        }

    }

}

module.exports = new DeviceController()