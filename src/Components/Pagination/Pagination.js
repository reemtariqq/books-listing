import React, { useState, useEffect } from 'react'
import './Pagination.scss'
function Pagination({ itemsNo, pageSize, getPage, activePage }) {

    const [pages, setPages] = useState(0)
    const getPages = () => {
        const pagesNo = itemsNo / pageSize
        var list = [];
        for (var i = 1; i <= pagesNo; i++) {
            list.push(i);
        }
        setPages(list)
    }
    useEffect(() => { getPages() }, [])

    return (
        <div className="pager">
            <button className="pager_item" onClick={() => getPage(1)}> {"<<"}</button>
            {pages &&
                pages.map(page => <button key={page} className="pager_item" onClick={() => getPage(page)}>{page}</button>)
            }
            <button className="pager_item" onClick={() => getPage(Math.max(...pages))}> {">>"}</button>

        </div>

    )
}

export default Pagination 
