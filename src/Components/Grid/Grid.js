import React from 'react' 
import Icon from '../Icon'
import './Grid.scss'

function List({ data, columns, title }) {
    return (
        <div>
            {
                data.map(item =>
                    <div>
                        <Icon/>
                        <span> {item.title}</span>
                        <br />
                        <span> {item.description}</span>
                    </div>

                )
            }

        </div >
    ) 
}

export default List 
