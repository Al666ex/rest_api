import {Form, Modal, Button, Dropdown, Row, Col} from 'react-bootstrap'
import { useContext, useState } from 'react';
import {Context} from '../../index'
import {v4} from 'uuid'

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => setInfo([...info,{title : '', description : '', number : Date.now()}])

    const removeItem = (number) => setInfo(info.filter(i => i.number !== number))


    return (
        <Modal
        onHide={onHide}
        show={show}
        size="lg"        
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить устройство
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>

                <Dropdown>
                    <Dropdown.Toggle>Выбрать тип</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map((type) => 
                            <Dropdown.Item key={v4()}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown >

                <Dropdown className='pt-3'>
                  <Dropdown.Toggle>Выбрать брэнд</Dropdown.Toggle>
                  <Dropdown.Menu>
                      {device.brands.map((brand) => 
                          <Dropdown.Item key={v4()}>{brand.name}</Dropdown.Item>
                      )}
                  </Dropdown.Menu>
                </Dropdown>
              
                <Form.Control className='mt-3' placeholder='Введите название устройства' />
                <Form.Control type='number' className='mt-3' placeholder='Введите стоимость устройства' />
                <Form.Control type='file' className='mt-3' />
                <hr/>

                <Button variant='primary' onClick={() => addInfo()}>Добавить новое свойство</Button>
                {info.map(itemProp => 
                  <Row key={itemProp.number} className='mt-3'>
                    <Col md={4}><Form.Control placeholder='Введите название' /> </Col>
                    <Col md={4}><Form.Control placeholder='Введите описание' /></Col>
                    <Col md={4}><Button variant='otline-danger' onClick={() => removeItem(itemProp.number)}>Удалить</Button></Col>
                  </Row>
                )}
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
          <Button variant='outline-success' onClick={onHide}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CreateDevice;