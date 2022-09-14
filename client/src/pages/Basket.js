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
    const shipping = 180  

    useEffect(() => {
        device.setBasket(devices)        
    }, [device, devices])

    const removeItem = (id) => {
        setDevices(devices.filter(item => item.id !== id ))        
    }

    const change = (id, qty) => {        
        setDevices(devices.map(item => 
                                item.id === id && item.qty !== qty ?
                                     {...item, qty} : 
                                        item))
    }
    
    const subtotal = devices.reduce((prev, curr) => prev + (curr.qty * curr.price), 0)       

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
                            onQty={(id, qty) => change(id, qty)}                            
                        />
                    )}
                </Col>
                <Col md={3}>
                    <BusketSummary subtotal={subtotal} shipping={shipping} />
                </Col>
            </Row> 
        </Container>
    )    
})

export default Basket
