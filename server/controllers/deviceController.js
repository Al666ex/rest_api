const uuid = require('uuid');
const path = require('path');
const {Device, DeviceInfo} = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceController{
    async create(req, res, next){
        try{
            const {name, price, typeId, brandId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const device = await Device.create({name, price, typeId, brandId, img : fileName})

            if(info){
                info = JSON.parse(info)
                info.forEach(i => 
                    DeviceInfo.create({
                        title : i.title,
                        discription : i.description,
                        deviceId : device.id
                    })
                )
            }

            return res.json(device);    
        }
        catch(e){
            next(ApiError.badRequest(e.message));
        }        

    }

    async getAll(req, res){
        let {brandId, typeId, limit, page} = req.query;
        
        page = page || 1;
        limit = limit || 9;        

        let offset = page * limit - limit;        
        let device;

        if(!brandId && !typeId){
            device = await Device.findAndCountAll({limit, offset});
        }

        if(brandId && !typeId){
            device = await Device.findAndCountAll({where: {brandId}, limit, offset});
        }

        if(!brandId && typeId){
            device = await Device.findAndCountAll({where:{typeId}, limit, offset});
        }

        if(brandId && typeId){
            device = await Device.findAndCountAll({where:{brandId, typeId}, limit, offset});
        }

        return res.json(device)

    }

    async getOne(req, res){

    }
}

module.exports = new DeviceController();