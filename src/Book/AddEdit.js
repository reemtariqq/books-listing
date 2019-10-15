import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as actions from '../actions/actions'

import './AddEdit.scss'
function AddEditBook({ location: { state: details } }) {

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
    let authorsList = useSelector(store => store.Author.list)
    let categoriesList = useSelector(store => store.Category.list)

    if (details && authorsList && categoriesList) {
        debugger
        authorsList = authorsList.map(author => {
            if (author.id === details.author) {
                return (
                    {
                        info: author,
                        selected: true
                    }
                )
            }
            else {
                return (
                    {
                        info: author,
                        selected: false
                    }
                )
            }
        })

        categoriesList = categoriesList.map(cat => {
            if (cat.id === details.category) {
                return (
                    {
                        info: cat,
                        selected: true
                    }
                )
            }
            else {
                return (
                    {
                        info: cat,
                        selected: false
                    }
                )
            }
        })
    }

    React.useEffect(() => {
        if (!categoriesList) dispatch(actions.fetchListCategories())
        if (!authorsList) dispatch(actions.fetchListAuthors())
    }, [])



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
        dispatch(actions.AddBook(formState))
        history.push('/')
    }


    return (
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
            <span> Title </span> <input defaultValue={details.title} onChange={validateInput} onBlur={(event) => handleFormState('title', event.target.value)} />
            <div className="form_select">
                <span> Author</span>
                <select onChange={(event) => handleFormState('author', event.target.value)}>
                    {

                        authorsList && authorsList.map(author => {
                            debugger
                            return (<option selected={author.selected} key={author.info.id}>{author.info.name}</option>)
                        })
                    }

                </select>

                <span> Category</span>
                <select onChange={(event) => handleFormState('category', event.target.value)}>
                    {
                        categoriesList && categoriesList.map(category => <option selected={category.selected} key={category.info.id}>{category.info.name}</option>)
                    }
                </select>
            </div>
            <textarea defaultValue={details.description} rows="20" cols="70" onBlur={(event) => handleFormState('description', event.target.value)} />
            <span> ISBN </span> <input defaultValue={details.isbn} onBlur={(event) => handleFormState('isbn', event.target.value)} />
            <span> Pages count </span> <input defaultValue={details.pagesNumber} onBlur={(event) => handleFormState('pagesNo', event.target.value)} />

            <span> Year Published </span> <input defaultValue={details.publishYear} onBlur={(event) => handleFormState('year', event.target.value)} />
            <span> Image URL </span> <input defaultValue={details.image} onBlur={(event) => handleFormState('imageURL', event.target.value)} />
            <div>
                <input type="submit" value="submit" />
                <button> Cancel</button>
            </div>
        </form >
    )
}

export default AddEditBook 
