import React, { useContext, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import ShopBar from '../components/ShopBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import {observer} from 'mobx-react-lite'

import {Context} from '../index'
import {fetchBrands, fetchTypes, fetchDevices} from '../http/deviceAPI'
import Pages from '../components/Pages'

const Shop = observer(() => {
    const {device} = useContext(Context)
    //typeId, brandId, limit, page

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 3).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })}, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id,  device.page, device.limit ).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    },
    [device.page, device.selectedType, device.selectedBrand])

    return (
        <Container>
            <Row>
                <Col xs={3}>
                    <ShopBar />
                </Col>
                <Col xs={9}>
                    <BrandBar />
                    <DeviceList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    )    
})

export default Shop
