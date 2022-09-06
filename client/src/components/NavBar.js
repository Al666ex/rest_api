import {useContext, useEffect} from 'react'
import {Navbar, Container,Nav, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import {Context} from '../index'
import {useNavigate} from 'react-router-dom'
import {ADMIN_ROUTE, LOGIN_ROUTE} from '../utils/consts'


const NavBar = observer(() => {
    const {user, device} = useContext(Context)
    const navigate = useNavigate()
    console.log('user.isAuth =='+user.isAuth)
    const logout = () => {
        user.setIsAuth(false)
        user.setUser({})
        localStorage.removeItem('token')          
        console.log('After logout user.isAuth ='+user.isAuth)
    }

    const removeFilters = () => {
        device.setSelectedType('')
        device.setSelectedBrand('')
    }

    return (
        <Navbar bg="dark" variant="dark">
        <Container className='d-flex'>
        <Button
            variant="link"
            //style={{color : 'white'}} 
            style={{color : 'white'}} 
            className="btn btn-link"
            onClick={() => {
                navigate(SHOP_ROUTE)
                removeFilters()
            }}         
        >
                Купи устройство            
        </Button>
        {user.isAuth ? 
            <Nav className="me-2">            
                <Button variant="outline-light" onClick={() => navigate(ADMIN_ROUTE)}>ADMIN Панель</Button>
                <Button className='ms-2' onClick={() => logout()} variant="outline-light">Выйти</Button>
            </Nav> :
            <Nav className="me-2">            
                <Button onClick={() => navigate(LOGIN_ROUTE)} variant="outline-light">Авторизация</Button>                
            </Nav> 
        }
        </Container>
      </Navbar>        
    )

})

export default NavBar


