import { observer } from 'mobx-react-lite';
import Star from './Star'
import './ListStars.css'

import {Context} from '../index'
import { useContext, useEffect, useState } from 'react';
import {updateRating} from '../http/deviceAPI'

const ListStars = observer(() => {

    const {device} = useContext(Context)
    const [selDev, setSeldev] = useState(device.selectedDevice)
    // console.log('/selDev/')
    // console.log(selDev.rating)

    const [cli, setCli] = useState(device.selectedDevice.rating)
    useEffect(() => {
      console.log(cli)
      
    }, [cli])


    const onRate = async (i) => {
      try {
        setCli(i)
        await updateRating( device.selectedDevice.id, cli )
        
      } catch (error) {
        
      }      
      
    }        
   
    const totalStars = 5    
    return(
      <div className='d-flex justify-content-center align-items-center'>
        {[...Array(totalStars)].map((item, i) => 
            <Star 
                key={i} 
                selected={i<device.selectedDevice.rating} 
                onClick={() => onRate(i+1)}                
                //currentStar={i+1}  
            /> 
        )}
      </div>
    )
})

export default ListStars;