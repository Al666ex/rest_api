import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ShopBar from '../components/ShopBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'

const Shop = () => {
    return (
        <Container>
            <Row>
                <Col xs={3}>
                    <ShopBar />
                </Col>
                <Col xs={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    )    
}

export default Shop
