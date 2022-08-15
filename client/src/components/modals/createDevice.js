import {Form, Modal, Button, Dropdown} from 'react-bootstrap'
import { useContext } from 'react';
import {Context} from '../../index'
import {v4} from 'uuid'

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
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
                </Dropdown>
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