import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link className="header_text" to='/' >Books Listing</Link>
            <div style={{ float: 'right' }}>
                <Link className="link" to='/book/new' >New Book</Link>
                <Link className="link" to='/category/new' >New Category</Link>
                <Link className="link" to='/author/new' >New Author</Link>
            </div >
        </div>
    )
}

export default Header 
