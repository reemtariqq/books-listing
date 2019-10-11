import React, { useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { fetchListAuthors } from '../actions/actions'

import List from '../Components/List'
function CategoryList() {
    const dispatch = useDispatch()
    const authorsList = useSelector(store => store.Author.list)
    useEffect(() => dispatch(fetchListAuthors()), []) 
    return (
        <div>
            {authorsList && <List title="Authors" data={authorsList} columns="name" />}
        </div>
    ) 
}

export default CategoryList 