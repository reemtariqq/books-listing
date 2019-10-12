import React from 'react'

import './List.scss'

function List({ data, columns, title, listName, setItemDetails }) {

    const getItem = id => {
        setItemDetails(data.filter(item => item.id === id)[0])
    }
    return (
        <div className="container">
            <div className="container_title"><span> {title}</span></div>
            <ul>
                {
                    data.map(item => <div key={item.id}>
                        <li><button onClick={() => { getItem(item.id) }}>{item[columns]}</button></li>
                        <br /> </div>)
                }
            </ul>

        </div >
    )
}

export default List
