import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as actions from '../actions/actions'

import './AddEdit.scss'
function AddEditBook() {

    const initialState = {
        title: '',
        author: '',
        category: '',
        description: '',
        isbn: '',
        pagesNo: '',
        year: '',
        imageURL: '',
    }
    const [formState, setFormState] = React.useState(initialState)

    const dispatch = useDispatch()
    const history = useHistory()
    const authorsList = useSelector(store => store.Author.list)
    const categoriesList = useSelector(store => store.Category.list)


    React.useEffect(() => {
        if (!categoriesList) dispatch(actions.fetchListCategories())
        if (!authorsList) dispatch(actions.fetchListAuthors())
    }, [actions.fetchListCategories])

    const handleFormState = (field, value) => {
        setFormState((oldState) => {
            return {
                ...oldState,
                [field]: value
            }
        })
    }

    const validateInput = input => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.AddEditBook(formState))
        history.push('/')
    }


    return (
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
            <span> Title </span> <input onChange={validateInput} onBlur={(event) => handleFormState('title', event.target.value)} />
            <div className="form_select">
                <span> Author</span>
                <select onChange={(event) => handleFormState('author', event.target.value)}>
                    {

                        authorsList && authorsList.map(author => <option key={author.id}>{author.name}</option>)
                    }
                </select>

                <span> Category</span>
                <select onChange={(event) => handleFormState('category', event.target.value)}>
                    {
                        categoriesList && categoriesList.map(category => <option key={category.id}>{category.name}</option>)
                    }
                </select>
            </div>
            <textarea rows="20" cols="70" onBlur={(event) => handleFormState('description', event.target.value)} />
            <span> ISBN </span> <input onBlur={(event) => handleFormState('isbn', event.target.value)} />
            <span> Pages count </span> <input onBlur={(event) => handleFormState('pagesNo', event.target.value)} />

            <span> Year Published </span> <input onBlur={(event) => handleFormState('year', event.target.value)} />
            <span> Image URL </span> <input onBlur={(event) => handleFormState('imageURL', event.target.value)} />
            <div>
                <input type="submit" value="submit" />
                <button> Cancel</button>
            </div>
        </form >
    )
}

export default AddEditBook 
