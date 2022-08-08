import React from "react"
import { Card, Container, Form, Button} from "react-bootstrap"
import { NavLink, useLocation } from "react-router-dom"
import { REGISTRATION_ROUTE, LOGIN_ROUTE} from "../utils/consts"
import {observer} from 'mobx-react-lite'

const Auth = observer(() =>{
    const location = useLocation()
    const isLogin = LOGIN_ROUTE === location.pathname
    
    return(
        <Container style={{height : window.innerHeight - 54}} className='d-flex justify-content-center align-items-center'>
            <Card style={{width : 600}} className='p-5'>
                <Form>
                    {
                        isLogin ?
                        <h2 className="text-center">Авторизация</h2> : 
                        <h2 className="text-center">Регистрация</h2>
                    }
                    
                    <Form.Control className="mt-3" type="email" placeholder="Enter email" />   
                    <Form.Control className="mt-3" type="password" placeholder="Password" /> 
                    <div className="d-flex bd-highlight mt-2">
                        {
                            isLogin ?
                            <div className="p-2 w-100 bd-highlight">нет эккаунта <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйся</NavLink></div> :
                            <div className="p-2 w-100 bd-highlight">есть эккаунт <NavLink to={LOGIN_ROUTE}>Войти</NavLink></div> 
                        }
                        {
                            isLogin ?
                            <Button className="p-2 flex-shrink-1 bd-highlight"variant="outline-success" type="submit">Войти</Button> :
                            <Button className="p-2 flex-shrink-1 bd-highlight"variant="outline-success" type="submit">Регистрация</Button> 
                        }                                                    
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