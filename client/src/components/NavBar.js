
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { SHOP_ROUTE } from "../utils/consts"
import {Navbar,Nav,Container,Button} from 'react-bootstrap'
import { Context } from "../index"
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Купи устройство</NavLink>
                {user.isAuth ? 
                        <Nav className="me-2">
                            <Button variant="outline-light">ADMIN</Button>
                            <Button onClick={() => user.setIsAuth(false)} className="mx-sm-2" variant="outline-light">Выйти</Button>
                        </Nav> : 
                        <Nav className="me-2">
                            <Button onClick={() => user.setIsAuth(true)} variant="outline-light">Авторизация</Button>                        
                        </Nav>                        
                }
            </Container>
        </Navbar>
    )
})

export default NavBar


