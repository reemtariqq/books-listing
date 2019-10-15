import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEditMode } from '../actions'
import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
    const dispatch = useDispatch()
    const isEditMode = useSelector(store => store.Config.isEditMode)
    const toggleEditMode = () => {
        dispatch(setEditMode(!isEditMode))
    }
    return (

        <div className={isEditMode ? "header edit" : "header"}>
            <Link className="header_text" to='/' >Books Listing</Link>
            <div style={{ float: 'right' }}>
                <Link className="link" to='/book/new' >New Book</Link>
                <Link className="link" to='/category/new' >New Category</Link>
                <Link className="link" to='/author/new' >New Author</Link>
                <button className="header_editMode" onClick={toggleEditMode}> Edit Mode</button>
            </div >
        </div>

    )
}

export default Header
