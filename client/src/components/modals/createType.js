import { useState } from 'react'
import {Form, Modal, Button} from 'react-bootstrap'
import {createType} from '../../http/deviceAPI'

const CreateType = ({show, onHide}) => {
  const [value, setValue] = useState('')
  const addType = () => {
    createType({name : value}).then(data => {
      setValue('')
      onHide()
    })
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
            Добавить тип
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control value={value} onChange={(e) => setValue(e.target.value)} placeholder='Введите название типа' />
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
          <Button onClick={addType} variant='outline-success'>Добавить</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CreateType;