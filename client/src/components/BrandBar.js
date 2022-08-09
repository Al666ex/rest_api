import { useContext } from "react"
import { observer } from "mobx-react-lite"
import {Row, Card} from 'react-bootstrap'
import {Context} from '../index'

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className='d-flex mt-3'>
            {device.brands.map((brand) => 
                <Card 
                    key={brand.id}
                    className={'w-auto p-3'}
                    style={{cursor : 'pointer'}}                                      
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    )
})

export default BrandBar

//      className={brand.id === device.selectedBrand.id ? 'danger h-divider' : 'light h-divider'}