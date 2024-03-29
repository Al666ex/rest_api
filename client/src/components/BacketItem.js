import { observer } from "mobx-react-lite"

import { Row, Col, Dropdown, Image, Button } from "react-bootstrap"

const BacketItem = observer(({item, onRemove=f=>f, onQty=f=>f}) => {    
    const {id, img, name, price, qty} = item
    const arr=[1,2,3,4,5,6,7,8,9]    
    
    return(
        <Row className="justify-content-md-center">
            <Col className="d-flex mb-3"  >
                <Col md={2} className='d-flex '>
                    <Image src={img} width={100} height={100} />                        
                </Col>
                <Col md={6} className='d-flex flex-column'>
                    <div>{name}</div>
                    <span className="text-black-50 productId">Product ID: {id}</span>
                    <Button  className="remove" onClick={onRemove}>Remove</Button>                        
                </Col>
                <Col md={1}>
                    {price}
                </Col>
                <Col md={2}>
                    <Dropdown >
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {qty}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu-basket" variant="white">
                            {arr.map(item =>                                 
                                <Dropdown.Item key={item} onClick={() => onQty(id,item)}>{item}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md={1}>{price * qty}</Col>
            </Col>
            <hr />

        </Row>    
    )

})

export default BacketItem