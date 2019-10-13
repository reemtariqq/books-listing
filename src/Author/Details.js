import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, withRouter } from 'react-router-dom'
import BookList from '../Book/List';

function Details({ match: { params: { id } } }) {
    const itemDetails = useSelector(store => store.Author.details)
    if (itemDetails) {
        return (
            <div>
                <span>{itemDetails.name}</span>
                <BookList id={id} from="author" />
            </div >
        )
    }
    else
        return null


}

export default withRouter(Details)
