import React from 'react';
import Icon from '../Icon'
import './Grid.scss'

function List({ data, columns, title }) {
    return (
        <div>
            {
                data.map(item =>
                    <Icon />
                )
            }

        </div >
    );
}

export default List;
