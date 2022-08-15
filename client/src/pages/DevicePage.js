import { Container,Row,Col, Image, Card, Button } from "react-bootstrap"
import bigStar from '../assets/bigStar.png'
import './DevicePage.css'

const DevicePage = () => {
    const device = {id:1, name : 'Galaxy S21 Ultra 5G Prime2', price : 15000, rating : 5, img:'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'}
    const description = [
        {id:1, title:'Оперативная память', description:'5 гигабайт'},
        {id:2, title:'Камера', description:'12 мп'},
        {id:3, title:'Процессор', description:'Пентиум 3'},
        {id:4, title:'Количество ядер', description:'12'},
        {id:5, title:'Аккумулятор', description:'4000'}
    ];
    return (
        <Container className="mt-3">
            <Row >
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <Image width={300} height={300} src={device.img} className='deviceImg' />                    
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
                {description.map((item, index) =>   
                    <Row key={index} style={{background : index % 2 === 0 ? 'lightgray' : 'transparent', padding : 10}}>
                        <div>{item.title} : {item.description} </div>
                    </Row>
                )}
            </Row>
        </Container>        
    )
}

export default DevicePage
