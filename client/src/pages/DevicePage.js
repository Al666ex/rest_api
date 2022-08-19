import { Container,Row,Col, Image, Card, Button } from "react-bootstrap"
import bigStar from '../assets/bigStar.png'
import './DevicePage.css'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {fetchOneDevice} from '../http/deviceAPI'

const DevicePage = () => {

    const [device, setDevice] = useState({info : []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    },[])
     



    return (
        <Container className="mt-3">
            <Row >
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} className='deviceImg' />                    
                </Col>
                <Col md={4} className="d-flex flex-column justify-content-center align-items-center">
                    <h3 className="text-center">{device.name}</h3>
                    <div>
                        <div style={{background : `url(${bigStar}) no-repeat center center`, backgroundSize: 'cover',  fontSize:36}}
                            className="d-flex justify-content-center align-items-center bigStar"        
                        >
                            {device.rating}                            
                        </div>

                    </div>
                </Col>
                <Col md={4} className="d-flex justify-content-center align-items-center" >
                    <Card 
                        style={{width : 300, height : 300}} 
                        className="d-flex justify-content-around align-items-center "
                    >
                            <div className="text-center">от {device.price} лей</div>
                            <Button  variant="outline-success">Добавить в корзину</Button>
                    </Card>
                </Col>                                
            </Row>
            <Row className="d-flex flex-column " >
                <h3>Характеристики</h3>
                {device.info.map((item, index) =>   
                    <Row key={index} style={{background : index % 2 === 0 ? 'lightgray' : 'transparent', padding : 10}}>
                        <div>{item.title} : {item.description} </div>
                    </Row>
                )}
            </Row>
        </Container>        
    )
}

export default DevicePage
