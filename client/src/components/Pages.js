import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Pagination } from "react-bootstrap";
import {Context} from '../index'

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    //console.log(pageCount)
    const pages = []
    for(let i = 0; i < pageCount; i++){
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-3">
            {pages.map(page => <Pagination.Item 
                              key={page}
                              active={page === device.page}
                              onClick={() => device.setPage(page)}
                            >
                                    {page}
                            </Pagination.Item>)}
        </Pagination>
    )
})

export default Pages;