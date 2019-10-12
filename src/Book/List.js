import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../actions/actions'
import { withRouter } from "react-router-dom"

import Grid from '../Components/Grid'


function BookList() {
  const dispatch = useDispatch()
  const bookList = useSelector(store => store.Book.list)
  const getPage = page => {
    dispatch(actions.fetchListBook({ page: page, limit: 6 }))
  }

  const setItemDetails = (itemDetails) => {
    return dispatch(actions.setItemDetailsBook(itemDetails))
  }

  useEffect(() => {
    if (!bookList) {
      dispatch(actions.fetchListBook({ page: 1, limit: 6 }))
    }
  }
    , [bookList])
  return (
    <div>
      {bookList && <Grid data={bookList} columns="name" getPage={getPage} setItemDetails={setItemDetails} />}
    </div>
  )
}

export default BookList