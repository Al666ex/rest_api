
import React,{useContext} from "react";
import {Navbar,Container, Nav, Button} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import {NavLink} from 'react-router-dom'
import {Context} from '../index'
import { SHOP_ROUTE } from "../utils/consts";

const NavBar = observer (() => {
    const {user} = useContext(Context);
    console.log(user.isAuth)
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color : 'white'}} to={SHOP_ROUTE} >Купи устройство</NavLink>        
                {user.isAuth ? 
                    <Nav className="ms-auto" style={{color : 'white'}}>
                        <Button variant="outline-light">Админ панель</Button>
                        <Button variant="outline-light" className="ms-2" >Авторизация</Button>
                    </Nav> : 
                    <Nav className="ms-auto" style={{color : 'white'}}>
                        <Button onClick={() => user.setIsAuth(true)} variant="outline-light">Регистрация</Button>
                    </Nav> 
                }        
            </Container>

        </Navbar>        
    )
})

export default NavBar;



































