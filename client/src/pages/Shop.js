import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ShopBar from '../components/ShopBar'
import BrandBar from '../components/BrandBar'

const Shop = () => {
    return (
        <Container>
            <Row>
                <Col xs={3}>
                    <ShopBar />
                </Col>
                <Col xs={9}>
                    <BrandBar />
                </Col>
            </Row>
        </Container>
    )    
}

export default Shop
