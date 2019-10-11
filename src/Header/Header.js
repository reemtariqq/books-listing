import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <span className="header_text"> Books Listing</span>
            <div style={{ float: 'right' }}>
                <button> <a href="/book/new">New Book</a> </button>
                <button> <a href="/category/new">New Category</a> </button>
                <button>   <a href="/author/new">New Author</a> </button>
            </div >
        </div >
    );
}

export default Header;
