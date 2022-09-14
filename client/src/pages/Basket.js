import React, { useContext, useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import BacketItem from '../components/BacketItem'
import './Basket.css'
import BusketSummary from '../components/BasketSummary'
import {Context} from '../index'
import { observer } from "mobx-react-lite"

const Basket = observer(() => {
    const {device} =useContext(Context)
    const [devices, setDevices] = useState(device.getBasket)    

    useEffect(() => {
        device.setBasket(devices)
    }, [devices])

    const removeItem = (id) => {
        setDevices(devices.filter(item => item.id !== id ))        
    }
    
    //const subtotal = () => devices.reduce((prev,cur) => prev+cur)

    return (
        <Container>
            <Row className="mt-5">
                <Col md={9}>
                    <Row className="fixed fw-bold">
                        <Col md={8}>Product</Col>
                        <Col md={1}>Price</Col>
                        <Col md={2}>Qty.</Col>
                        <Col md={1}>Total</Col>
                    </Row>
                    <hr />
                    {devices.map(item => 
                        <BacketItem 
                            key={item.id} 
                            item={item}
                            onRemove={() => removeItem(item.id)}                            
                        />
                    )}
                </Col>
                <Col md={3}>
                    <BusketSummary />
                </Col>
            </Row> 
        </Container>
    )    
})

export default Basket
