import {useContext} from 'react'
import {Navbar, Container,Nav, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import {Context} from '../index'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
        <Container className='d-flex'>
        <NavLink style={{color : 'white'}} to={SHOP_ROUTE}>Купи устройство</NavLink>
        {user._isAuth ? 
            <Nav className="me-2">            
                <Button variant="outline-light">ADMIN</Button>
                <Button className='ms-2' onClick={() => user.setIsAuth(false)} variant="outline-light">Выйти</Button>
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


