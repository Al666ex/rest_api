import React, { useContext, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import ShopBar from '../components/ShopBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import {fetchTypes} from '../http/deviceAPI'
import {Context} from '../index'

const Shop = () => {
    const {device} = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
    }, [])
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
