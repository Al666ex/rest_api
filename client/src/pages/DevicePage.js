import { Container,Row,Col, Image, Card, Button } from "react-bootstrap"
import bigStar from '../assets/bigStar.png'
import './DevicePage.css'
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import {fetchOneDevice} from '../http/deviceAPI'
import ListStars from '../components/ListStars'
import {Context} from '../index'
import { observer } from "mobx-react-lite"
import ReactStars from 'react-rating-stars-component'
import {updateRating} from '../http/deviceAPI'

const DevicePage = observer(() => {

    const {device} = useContext(Context)
    const [deviceSelected, setDevice] = useState({info : []})
    const [r, setR] = useState(deviceSelected.rating)
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => {
            setDevice(data)}            
        )        
    },[])

    useEffect(() => {

        //device.setSelectedDevice(deviceSelected)
        fetchOneDevice(id).then(data => {
            setDevice(data)}            
        )
        
        updateRating( device.selectedDevice.id, r )
    },[r])    

    device.setSelectedDevice(deviceSelected)

    //console.log(device.selectedDevice.name)

    const ratingChanged = async (newRating) => {
        //await updateRating( device.selectedDevice.id, newRating )
        setR(newRating)
        console.log(newRating);
    };    


    return (
        <Container className="mt-3">
            <Row >
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + deviceSelected.img} className='deviceImg' />                    
                </Col>
                <Col md={4} className="d-flex flex-column justify-content-center align-items-center">
                    <h3 className="text-center">{deviceSelected.name}</h3>
                    <div>
                        <div style={{background : `url(${bigStar}) no-repeat center center`, backgroundSize: 'cover',  fontSize:36}}
                            className="d-flex justify-content-center align-items-center bigStar"        
                        >
                            {deviceSelected.rating}                            
                        </div>

                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />                        

                    </div>
                </Col>
                <Col md={4} className="d-flex justify-content-center align-items-center" >
                    <Card 
                        style={{width : 300, height : 300}} 
                        className="d-flex justify-content-around align-items-center "
                    >
                            <div className="text-center">от {deviceSelected.price} лей</div>
                            <Button  variant="outline-success">Добавить в корзину</Button>
                    </Card>
                </Col>                                
            </Row>
            <Row className="d-flex flex-column " >
                <h3>Характеристики</h3>
                {deviceSelected.info.map((item, index) =>   
                    <Row key={index} style={{background : index % 2 === 0 ? 'lightgray' : 'transparent', padding : 10}}>
                        <div>{item.title} : {item.description} </div>
                    </Row>
                )}
            </Row>
        </Container>        
    )
})

export default DevicePage
