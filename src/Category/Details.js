import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter, useHistory } from 'react-router-dom'
import BookList from '../Book/List';

function Details({ match: { params: { id } } }) {
    const history = useHistory()
    const itemDetails = useSelector(store => store.Category.details)
    const isEditMode = useSelector(store => store.Config.isEditMode)
    const editCategory = () => {
        history.push(`/category/${id}/edit`, itemDetails)
    }
    if (itemDetails) {
        return (
            <div>
                <span>{itemDetails.name}</span>
                {isEditMode && <button onClick={editCategory}> Edit</button>}
                <BookList itemsNo={10} id={id} from="category" />
            </div >
        )
    }
    else
        return null


}

export default withRouter(Details)
