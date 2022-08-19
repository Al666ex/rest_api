import React, { useContext, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import ShopBar from '../components/ShopBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import {observer} from 'mobx-react-lite'

import {Context} from '../index'
import {fetchBrands, fetchTypes, fetchDevices} from '../http/deviceAPI'

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
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
})

export default Shop
