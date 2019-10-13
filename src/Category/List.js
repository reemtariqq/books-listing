import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, useHistory } from "react-router-dom"
import * as actions from '../actions/actions'

import List from '../Components/List'

function CategoryList() {
    const dispatch = useDispatch()
    const history = useHistory()
    const catList = useSelector(store => store.Category.list)
    const setItemId = (id) => {
        dispatch(actions.fetchCategory({ id }))
        history.replace(`/category/${id}`)
    }
    useEffect(() => {
        if (!catList) dispatch(actions.fetchListCategories())
    }, [actions.fetchListCategories])
    return (
        <div>
            {catList && <List title="Categories" listName="category" data={catList} columns="name" setItemId={setItemId} />}
        </div>
    )
}

export default withRouter(CategoryList)