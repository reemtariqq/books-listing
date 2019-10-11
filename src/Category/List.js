import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../actions/actions'

import List from '../Components/List'
function CategoryList() {
    const dispatch = useDispatch()
    const catList = useSelector(store => store.Category.list)
    useEffect(() => dispatch(actions.fetchListCategories()), []);
    return (
        <div>
            {catList && <List title="Categories" data={catList} columns="name" />}
        </div>
    );
}

export default CategoryList;