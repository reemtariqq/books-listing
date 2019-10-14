import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import BookList from '../Book/List';

function Details({ match: { params: { id } } }) {
    const itemDetails = useSelector(store => store.Author.details)
    if (itemDetails) {
        return (
            <div>
                <span>{itemDetails.name}</span>
                <BookList itemsNo={10} id={id} from="authors" />
            </div >
        )
    }
    else
        return null


}

export default withRouter(Details)
