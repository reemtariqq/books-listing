import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter, useHistory } from 'react-router-dom'
import BookList from '../Book/List';

function Details({ match: { params: { id } } }) {
    const history = useHistory()
    const itemDetails = useSelector(store => store.Author.details)
    const isEditMode = useSelector(store => store.Config.isEditMode)
    const editAuthor = () => {
        history.push(`/author/${id}/edit`, itemDetails)
    }

    if (itemDetails) {
        return (
            <div>
                <span>{itemDetails.name}</span>
                {isEditMode && <button onClick={editAuthor}> Edit</button>}
                <BookList itemsNo={10} id={id} from="authors" />
            </div >
        )
    }
    else
        return null


}

export default withRouter(Details)
