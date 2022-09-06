import {Form, Modal, Button, Dropdown, Row, Col} from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react';
import {Context} from '../../index'
import {v4} from 'uuid'
import {fetchTypes, fetchBrands, createDevice} from '../../http/deviceAPI'
import { observer } from 'mobx-react-lite';


const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(() => {
      fetchTypes().then(data => device.setTypes(data))
      fetchBrands().then(data => device.setBrands(data))

    },[])

    const addInfo = () => setInfo([...info,{title : '', description : '', number : Date.now()}])
    const removeItem = (number) => setInfo(info.filter(i => i.number !== number))

    const addFile = (e) => {        
      setFile(e.target.files[0])
    }

    const changeInfo = (key, value, number) => {
      setInfo(info.map(item => item.number === number ? {...item, [key] : value} : item))
    }

    const addDevice = () => {
      let formData = new FormData()
      //name, price, typeId, brandId, img
      formData.append('name', name)
      formData.append('price', `${price}`)
      formData.append('img', file)
      formData.append('brandId', device.selectedBrand.id)
      formData.append('typeId', device.selectedType.id)      
      formData.append('info', JSON.stringify(info))

      createDevice(formData).then(data => onHide())

    }

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
                    <Dropdown.Toggle>{device.selectedType.name || 'Выбрать тип'} </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map((type) => 
                            <Dropdown.Item                            
                              key={type.id}
                              onClick={() => device.setSelectedType(type)}                              
                            >
                              {type.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown >

                <Dropdown className='pt-3'>
                  <Dropdown.Toggle>{device.selectedBrand.name || 'Выбрать брэнд'}</Dropdown.Toggle>
                  <Dropdown.Menu>
                      {device.brands.map((brand) => 
                          <Dropdown.Item 
                            key={brand.id}
                            onClick={() => device.setSelectedBrand(brand)}
                          >
                            {brand.name}
                          </Dropdown.Item>
                      )}
                  </Dropdown.Menu>
                </Dropdown>
              
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} className='mt-3' placeholder='Введите название устройства' />
                <Form.Control value={price} onChange={e => setPrice(Number(e.target.value))} type='number' className='mt-3' placeholder='Введите стоимость устройства' />
                <Form.Control onChange={addFile} type='file' className='mt-3' />
                <hr/>

                <Button variant='primary' onClick={() => addInfo()}>Добавить новое свойство</Button>
                {info.map(itemProp => 
                  <Row key={itemProp.number} className='mt-3'>
                    <Col md={4}>
                      <Form.Control value={itemProp.title} onChange={(e) => changeInfo('title', e.target.value, itemProp.number)} placeholder='Введите название' /> 
                    </Col>
                    <Col md={4}>
                      <Form.Control value={itemProp.description} onChange={(e) => changeInfo('description', e.target.value, itemProp.number)} placeholder='Введите описание' />
                    </Col>
                    <Col md={4}>
                      <Button variant='otline-danger' onClick={() => removeItem(itemProp.number)}>Удалить</Button>
                    </Col>
                  </Row>
                )}
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
          <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    )
})

export default CreateDevice;