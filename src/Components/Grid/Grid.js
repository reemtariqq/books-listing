import React from 'react'
import Icon from '../Icon'
import Pagination from '../Pagination';
import './Grid.scss'

function Grid({ data, getPage, setItemDetails }) {

    const getItem = id => {
        setItemDetails(data.filter(item => item.id === id)[0])
    }
    return (
        <div>
            {
                data.map(item =>
                    <div key={item.id}>
                        <Icon />
                        <button onClick={() => { getItem(item.id) }}> {item.title}</button>
                        <br />
                        <span> {item.description}</span>
                    </div>
                )
            }
            <Pagination itemsNo={100} pageSize={6} getPage={getPage} />
        </div >
    )
}

export default Grid 
