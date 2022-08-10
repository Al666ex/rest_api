import { Container,Row,Col, Image, Card, Button } from "react-bootstrap"
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = {id:1, name : 'Galaxy S21 Ultra 5G Prime2', price : 15000, rating : 5, img:'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'}
    return (
        <Container className="mt-3" >
            <Row>
                <Col 
                    md={4} 
                    className='d-flex justify-content-center align-items-center'
                >
                    <Image 
                        src={device.img} 
                        style={{width : 300, height : 300}}
                    />
                </Col>
                <Col md={4} >
                    <Row className="d-flex flex-column justify-content-center align-items-center ">
                        <h3 className="w-auto">{device.name}</h3>
                        <div 
                            style={{background : `url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize:'cover', fontSize:32 }}
                            className='d-flex justify-content-center align-items-center'
                        >
                            {device.rating}
                        </div>

                    </Row>
                </Col>
                <Col md={4}>
                    <Card 
                        className="d-flex  justify-content-around justify-content-center align-items-center"
                        style={{width:300, height : 300, fontSizt:32} }                        
                    >
                        <h3>От {device.price} лей</h3>
                        <Button>Добавить в корзину</Button>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default DevicePage
