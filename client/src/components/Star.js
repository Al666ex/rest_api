import { observer } from "mobx-react-lite";
import { Button, Image } from "react-bootstrap";
import star from '../assets/star.png'
import {Context} from '../index'
import { useContext } from 'react';

const Star = ({selected, onClick=f=>f}) => {
    const {device} = useContext(Context)        

    return (
        <div>            
            <Image src={star} width={18} height={18}
                onClick={onClick} 
                className={selected ? 'star selected' : 'star'} 
            />                 
        </div>

    )
}

export default Star;
//<Image src={star} width={18} height={18} onClick={() => console.log(currentStar)} />

/*
import { observer } from "mobx-react-lite";
import { Button, Image } from "react-bootstrap";
import star from '../assets/star.png'
import {Context} from '../index'
import { useContext } from 'react';

const Star = observer(({selected, currentStar}) => {
    const {storage} = useContext(Context)
    return (
        <Image width={18} height={18}
        onClick={() => {
            storage.setRating(currentStar)
            console.log(storage.rating)
        }
        } 
        className={selected ? 'star selected' : 'star'} />
    )
})

export default Star;
*/






/*
import { observer } from "mobx-react-lite";
import { Button, Image } from "react-bootstrap";
import star from '../assets/star.png'
import {Context} from '../index'
import { useContext } from 'react';

const Star = observer(({selected, currentStar}) => {
    const {storage} = useContext(Context)
    console.log(selected)
    return (
        <Image src={star} width={18} height={18}
        onClick={() => {
            storage.setRating(currentStar)
            console.log(storage.rating)
        }
        } 
        className={selected ? 'star selected' : 'star'} />
    )
})

export default Star;
*/