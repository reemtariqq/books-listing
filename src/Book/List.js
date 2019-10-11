import React, { useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../actions/actions'

import Grid from '../Components/Grid'
function BookList() {
  const dispatch = useDispatch()
  const bookList = useSelector(store => store.Book.list)
  useEffect(() => dispatch(actions.fetchListBook()), []) 
  return (
    <div>
      {bookList && <Grid data={bookList} columns="name" />}
    </div>
  ) 
}

export default BookList 