import { useContext} from 'react'
import {Row} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
    const {device} = useContext(Context)   

    return (
        <Row>
            {device.devices.map((device) => 
                <DeviceItem 
                    key={device.id} 
                    dev={device}
      
                />
            )}
        </Row>
    )    
})

export default DeviceList;