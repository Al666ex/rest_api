import React, { useState,useContext } from "react"
import { Card, Container, Form, Button} from "react-bootstrap"
import { NavLink, useLocation, useNavigate} from "react-router-dom"
import { REGISTRATION_ROUTE, LOGIN_ROUTE} from "../utils/consts"
import {observer} from 'mobx-react-lite'
import { registration, login } from "../http/userAPI"
import {Context} from '../index'
import {SHOP_ROUTE} from '../utils/consts'

const Auth = observer(() =>{
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = LOGIN_ROUTE === location.pathname
    const {user} = useContext(Context)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const check = async () => {
        try {
            //let data;
            if(isLogin){
                //data = await login(email, password)
                await login(email, password)
                //return data
            }else {
                //data = await registration(email, password)            
                await registration(email, password)            
                //console.log(data)
            }
            user.setUser(user)
            user.setIsAuth(true)
            
            navigate(SHOP_ROUTE)
            //if(user.isAuth){navigate(SHOP_ROUTE)}
                
        } catch (error) {
            alert(error.response.data.message)
        }
    }
    
    return(
        <Container style={{height : window.innerHeight - 54}} className='d-flex justify-content-center align-items-center'>
            <Card style={{width : 600}} className='p-5'>
                <Form>
                    <h2 className="text-center">{isLogin ? 'Авторизация' : 'Регистрация'}</h2> 
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} className="mt-3" type="email" placeholder="Enter email" />   
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} className="mt-3" type="password" placeholder="Password" /> 
                    <div className="d-flex bd-highlight mt-2">
                        {
                            isLogin ?
                            <div className="p-2 w-100 bd-highlight">нет эккаунта <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйся</NavLink></div> :
                            <div className="p-2 w-100 bd-highlight">есть эккаунт <NavLink to={LOGIN_ROUTE}>Войти</NavLink></div> 
                        }
                        <Button 
                            className="p-2 flex-shrink-1 bd-highlight"
                            variant="outline-success"
                            onClick={check}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button> 
                    </div>                    
                </Form>    
            </Card>
        </Container>    
    )
})

export default Auth
/*
                <div class='d-flex justify-content-end'>
                    <Button className="mt-3" variant="outline-success" type="submit">Submit</Button>
                </div>

*/