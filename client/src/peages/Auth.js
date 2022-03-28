
import React from "react";
import {Container, Card, Form, Row, Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    return(
        <Container 
            className={'d-flex justify-content-center align-items-center'} 
            style={{height : window.innerHeight - 54}}            
        > 
        <Card style={{width : 600}} className={'p-5'}>
            <h2 className="m-auto">Авторизация</h2>
            <Form className="d-flex flex-column">
                <Form.Control 
                    className="mt-2"
                    placeholder="Введите email"
                />
                <Form.Control 
                    className="mt-2"
                    placeholder="Введите пароль"
                />
                <div className="d-flex justify-content-between mt-3 ">                                
                    <div>Нет эккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink></div>
                    <Button variant={"outline-success"}> Войти </Button>
                </div>               

            </Form>
        </Card>
           
        </Container>
    )
}

export default Auth;