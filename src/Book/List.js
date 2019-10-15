import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../actions'
import { withRouter, useHistory } from "react-router-dom"

import Grid from '../Components/Grid'
import sortIcon from '../assets/images/sort-512.png'


import './List.scss'


function BookList(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const bookList = useSelector(store => store.Book.list)
  const [sortDirection, setSortDirection] = React.useState('asc')
  const query = { page: 1, limit: 6 }
  if (props.id) {
    query.id = props.id
    query.from = props.from
  }
  const getPage = page => {
    query.page = page

    dispatch(actions.fetchListBook(query))
  }

  const setItemId = (id) => {
    dispatch(actions.fetchBook({ id }))
    history.replace(`/book/${id}`)
  }

  const fetchBookList = () => {
    query.sort = {
      by: 'title',
      direction: sortDirection
    }
    dispatch(actions.fetchListBook(query))
  }

  const sortBookList = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    fetchBookList()
  }

  useEffect(() => {
    // if (!bookList) {
    fetchBookList()
  }
    // }
    , [])

  return (
    <div>
      <img className="sortIcon" src={sortIcon} onClick={sortBookList} />
      {bookList && <Grid itemsNo={props.itemsNo} data={bookList} columns="name" getPage={getPage} setItemId={setItemId} />}
    </div>
  )
}

export default withRouter(BookList)