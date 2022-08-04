const ApiError = require("../errorsApi/apiError")
const jwt = require('jsonwebtoken');

module.exports = function(role){
    return function(req, res, next){
        if(req.method === 'OPTION'){
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                next(ApiError.badRequest('Пользователь не аутентифицирован'))                
            }

            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if(decoded.role !== role){
                next(ApiError.badRequest('Пользователь не имеет прав на добавление записи'))
            }

            req.user = decoded
            next()

        } catch (error) {
            next(ApiError.badRequest({message : error}))            
        }
    }
}






























// module.exports = function(role){
//     return function(req, res, next){
//         if(req.method === 'OPTION'){
//             next()
//         }
//         try {
            
//             const token = req.headers.authorization.split(' ')[1]
//             if(!token){
//                 next(ApiError.badRequest('Авторизация отсутствует'))
//             }
//             const decoded = jwt.verify(token, process.env.SECRET_KEY)            
//             if(decoded.role !== role){
//                 next(ApiError.badRequest('Доступ отсутствует'))
//             }

//             req.user = decoded
//             next()

//         } catch (error) {
//             next(ApiError.badRequest('Нед доступа.'))
//         }
//     }
// }