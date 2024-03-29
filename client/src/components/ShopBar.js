
import {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {ListGroup } from 'react-bootstrap'
import {Context} from '../index'

const ShopBar = observer(() => {
    const {device} = useContext(Context)

    return(
      <ListGroup className='mt-3'>
            {device.types.map((type) => 
                <ListGroup.Item                     
                    key={type.id}
                    style={{cursor : 'pointer'}}
                    active={type.id === device.selectedType.id}
                    onClick={() => {
                            device.setSelectedType(type)
                            console.log('type = ' +type);                            
                        }                       
                    }
                >
                        {type.name}
                </ListGroup.Item>)}        
      </ListGroup>    
    )
})

export default ShopBar