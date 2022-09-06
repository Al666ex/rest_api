
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png'
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE} from '../utils/consts'
import { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {Context} from '../index'


const DeviceItem = observer(({dev, brandName}) => {
    const navigate = useNavigate()
    const {device} = useContext(Context)
    const [brand, setBrand] = useState({})

    useEffect(() => {
        setBrand(device.brands.find(item => item.id === dev.brandId ))
    },[dev.brandId])    
    
    return (
    <Col md={3} className='mt-3 m-auto' onClick={() => navigate(DEVICE_ROUTE+'/'+dev.id)}>
        <Card style={{width : 150, cursor : 'pointer'}} border={'light'} >
            <Image width={150} height={150} src={process.env.REACT_APP_API_URL+dev.img} />
            <div className='text-black-50 d-flex mt-1 justify-content-between align-items-center'>
                <div>{brand.name}</div>
                <div className='d-flex align-items-center'>
                    <div>{dev.rating}</div>
                    <Image width={17} height={17} src={star} />
                </div>
            </div>
            <div>{dev.name}</div>
        </Card>
    </Col>

    )
})


export default DeviceItem;