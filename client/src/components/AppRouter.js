import React, { useContext } from "react"
import { Routes, Route} from'react-router-dom'
import { authRoutes, publicRoutes } from "../routes"
import {v4} from 'uuid'
import Shop from "../pages/Shop"
import { Context } from "../index"
import { observer } from "mobx-react-lite"

const AppRouter = observer(() => {
    const {user} = useContext(Context)      
    //console.log(user)  
    return(
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={v4()} path={path} element={<Component />} exact />)}

            {publicRoutes.map(({path, Component}) => 
                <Route key={v4()} path={path} element={<Component />} exact />)}    

            <Route path="*" element={<Shop />}/>      
        </Routes>
        
    )
})

export default AppRouter
//<Route path="*" element={<Shop />}/>      