import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../actions/actions'

import List from '../Components/List'
function CategoryList() {
    const dispatch = useDispatch()
    const authorsList = useSelector(store => store.Author.list)
    const setItemId = (id) => {
        debugger
        // dispatch(action.fetchAuthor({ id }))
        // history.replace(`/author/${id}`)
    }
    useEffect(() => {
        if (!authorsList) dispatch(action.fetchListAuthors())
    }, [authorsList])
    return (
        <div>
            {authorsList && <List title="Authors" listName="author" data={authorsList} columns="name" setItemId={setItemId} />}
        </div>
    )
}

export default CategoryList 