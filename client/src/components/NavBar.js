import {useContext, useEffect} from 'react'
import {Navbar, Container,Nav, Button, Image} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import {Context} from '../index'
import {useNavigate} from 'react-router-dom'
import {ADMIN_ROUTE, LOGIN_ROUTE, BASKET_ROUTE} from '../utils/consts'
import basket from '../assets/shopping-cart-solid.svg'


const NavBar = observer(() => {
    const {user, device} = useContext(Context)
    const navigate = useNavigate()
    //console.log('user.isAuth =='+user.isAuth)
    const logout = () => {
        user.setIsAuth(false)
        user.setUser({})
        localStorage.removeItem('token')          
        //console.log('After logout user.isAuth ='+user.isAuth)
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
                <NavLink to={BASKET_ROUTE} className="d-flex justify-content-center align-items-center me-2">
                    <Image style={{width : 30, height : 30}} src={basket} />
                </NavLink>            
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


