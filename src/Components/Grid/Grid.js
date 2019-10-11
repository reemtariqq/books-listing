import React, { useState } from 'react'
import Icon from '../Icon'
import Pagination from '../Pagination';
import './Grid.scss'

function Grid({ data, columns, title, getPage }) {

    // const getPage = page => {

    // }
    return (
        <div>
            {
                data.map(item =>
                    <div>
                        <Icon />
                        <span> {item.title}</span>
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
