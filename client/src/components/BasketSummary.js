
import {Card} from 'react-bootstrap'

const BusketSummary = () => {
    return(
        <Card className='position-fixed' border="info" style={{ width: '18rem' }}>
            <Card.Header>Order Summary</Card.Header>
            <Card.Body>
                
                <Card.Text className='d-flex justify-content-between fw-bold'>
                    <span className='d-flex'>Subtotal</span>
                    <span className='d-flex'>Price</span>
                </Card.Text>

                <Card.Text className='d-flex justify-content-between'>
                    <span className='d-flex'>Shipping</span>
                    <span className='d-flex'>180</span>
                </Card.Text>
                <hr />                

                <Card.Text className='d-flex justify-content-between fw-bold blockquote'>
                    <span className='d-flex'>Total</span>
                    <span className='d-flex'>Price</span>
                </Card.Text>            
            </Card.Body>
        </Card>         
    )
}

export default BusketSummary;