const express = require('express')
require('dotenv').config()
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors');
const router = require('./routers/index')
const handleError = require('./middleware/errorHandleMiddleware')
const uploadFiles = require('express-fileupload')


const app = express()
app.use(cors())
app.use(express.json());
app.use(express.static('static'))
app.use(uploadFiles({}))
app.use('/api', router)
app.use(handleError);



const PORT = process.env.PORT || 5000

async function StartApp(){
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server stared on port=${PORT}`))            
    } catch (error) {
        console.log(error)        
    }
}

StartApp()
