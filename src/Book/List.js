import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../actions/actions'
import { withRouter } from "react-router-dom"

import Grid from '../Components/Grid'
import sortIcon from '../assets/images/sort-512.png'


import './List.scss'


function BookList(props) {
  const dispatch = useDispatch()
  const bookList = useSelector(store => store.Book.list)
  const query = { page: 1, limit: 6 }
  if (props.id) {
    query.id = props.id
    query.from = props.from
  }
  const getPage = page => {
    query.page = page

    dispatch(actions.fetchListBook(query))
  }

  const setItemDetails = (itemDetails) => {
    return dispatch(actions.setItemDetailsBook(itemDetails))
  }

  const fetchBookList = () => {

    dispatch(actions.fetchListBook(query))
  }

  useEffect(() => {
    // if (!bookList) {
    fetchBookList()
  }
    // }
    , [])

  return (
    <div>
      <img className="sortIcon" src={sortIcon} onClick={() => dispatch(actions.fetchListBook())} />
      {bookList && <Grid itemsNo={props.itemsNo} data={bookList} columns="name" getPage={getPage} setItemDetails={setItemDetails} />}
    </div>
  )
}

export default withRouter(BookList)