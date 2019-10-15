import React from 'react'
import PropTypes from 'prop-types';
import Icon from '../Icon'
import Pagination from '../Pagination';
import './Grid.scss'

function Grid({ data, getPage, setItemId, itemsNo }) {

    const getItem = id => {
        setItemId(id)
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
            {data && <Pagination itemsNo={itemsNo} pageSize={6} getPage={getPage} />}
        </div >
    )
}

export default Grid


Grid.propTypes = {
    itemsNo: PropTypes.number
}
Grid.defaultProps = {
    itemsNo: 100
}