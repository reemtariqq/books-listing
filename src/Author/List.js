import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../actions/actions'

import List from '../Components/List'
function CategoryList() {
    const history = useHistory()
    const dispatch = useDispatch()
    const authorsList = useSelector(store => store.Author.list)
    const setItemId = (id) => {
        dispatch(actions.fetchAuthor({ id }))
        history.replace(`/author/${id}`)
    }
    useEffect(() => {
        if (!authorsList) dispatch(actions.fetchListAuthors())
    }, [authorsList])
    return (
        <div>
            {authorsList && <List title="Authors" listName="author" data={authorsList} columns="name" setItemId={setItemId} />}
        </div>
    )
}

export default CategoryList 