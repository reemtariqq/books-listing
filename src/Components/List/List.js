import React from 'react' 
import './List.scss'

function List({ data, columns, title }) {
    return (
        <div className="container">
            <div className="container_title"><span> {title}</span></div>
            <ul>
                {
                    data.map(item => <div>
                        <li>  <a>{item[columns]}</a></li>
                        <br /> </div>)
                }
            </ul>

        </div >
    )
}

export default List 
