import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter, useHistory } from 'react-router-dom'
import Icon from '../Components/Icon'

function Details({ match: { params: { id } } }) {
    const history = useHistory()
    const itemDetails = useSelector(store => store.Book.details)
    const category = useSelector(store => store.Category.details)

    const isEditMode = useSelector(store => store.Config.isEditMode)
    const editAuthor = () => {
        history.push(`/book/${id}/edit`, itemDetails)
    }

    if (itemDetails) {
        return (
            <div>
                <Icon />
                <span>{itemDetails.title}</span>
                <div>
                    <span>by</span>
                    <span>{itemDetails.author}</span>
                </div>

                <div>
                    <span>Number of Pages</span>
                    <span>{itemDetails.pagesNumber}</span>
                </div>

                <div>
                    <span>Publish Year</span>
                    <span>{itemDetails.publishYear}</span>
                </div>

                <div>
                    <span>ISBN</span>
                    <span>{itemDetails.isbn}</span>
                </div>

                <div>
                    <span>Classification</span>
                    <span>{category && category.name}</span>
                </div>
                <span>{itemDetails.description}</span>


                {isEditMode && <button onClick={editAuthor}> Edit</button>}

            </div >
        )
    }
    else
        return null


}

export default withRouter(Details)
