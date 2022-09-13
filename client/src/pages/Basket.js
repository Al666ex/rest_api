import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import BacketItem from '../components/BacketItem'
import './Basket.css'
import BusketSummary from '../components/BasketSummary'

const Basket = () => {
    const [devices, setDevices] = useState([
        {id:1, name : 'Galaxy S21 Ultra 5G Prime2', price : 15000, rating : 5, img:'https://damion.club/uploads/posts/2022-01/1643138500_5-damion-club-p-kot-v-chernikh-ochkakh-5.jpg'},
        {id:2, name : 'Xperia PRO-I', price : 12400, rating : 5, img:'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'},           
        {id:3, name : 'Sony S21 Ultra 5G Prime2', price : 15000, rating : 5, img:'https://uprostim.com/wp-content/uploads/2021/05/image032-6.jpg'},
        {id:4, name : 'Xiaomi PRO-II', price : 12400, rating : 5, img:'https://uprostim.com/wp-content/uploads/2021/05/image051-7.jpg'},           
        {id:5, name : 'Galaxy S21 Ultra 5G Prime2', price : 15000, rating : 5, img:'https://damion.club/uploads/posts/2022-01/1643160455_1-damion-club-p-kot-sportsmen-1.jpg'},
        {id:6, name : 'LG PI', price : 12400, rating : 5, img:'https://damion.club/uploads/posts/2022-01/1643160455_1-damion-club-p-kot-sportsmen-1.jpg'},
        {id:7, name : 'Xiaomi PRO-II', price : 12400, rating : 5, img:'https://uprostim.com/wp-content/uploads/2021/05/image051-7.jpg'},           
        {id:8, name : 'Galaxy S21 Ultra 5G Prime2', price : 15000, rating : 5, img:'https://damion.club/uploads/posts/2022-01/1643160455_1-damion-club-p-kot-sportsmen-1.jpg'},
        {id:9, name : 'LG PI', price : 12400, rating : 5, img:'https://damion.club/uploads/posts/2022-01/1643160455_1-damion-club-p-kot-sportsmen-1.jpg'}           

    ])

    const removeItem = (id) => {
        setDevices(devices.filter(item => item.id !== id ))
    }

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
}

export default Basket
