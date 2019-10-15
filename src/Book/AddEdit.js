import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as actions from '../actions/actions'

import './AddEdit.scss'
function AddEditBook({ location: { state: details } }) {

    const initialState = {
        id: details ? details.id : '',
        title: details ? details.title : '',
        author: details ? details.author : '',
        category: details ? details.category : '',
        description: details ? details.description : '',
        isbn: details ? details.isbn : '',
        pagesNumber: details ? details.pagesNumber : '',
        publishYear: details ? details.publishYear : '',
        imageURL: details ? details.imageURL : '',
    }
    const [formState, setFormState] = React.useState(initialState)

    const dispatch = useDispatch()
    const history = useHistory()
    let authorsList = useSelector(store => store.Author.list)
    let categoriesList = useSelector(store => store.Category.list)

    if (details && authorsList && categoriesList) {

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (details) {
            dispatch(actions.EditBook(formState))
        }
        else { dispatch(actions.AddBook(formState)) }

        history.push('/')
    }


    return (
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
            <span> Title </span> <input defaultValue={formState.title} onBlur={(event) => handleFormState('title', event.target.value)} />
            <div className="form_select">
                <span> Author</span>
                <select onChange={(event) => handleFormState('author', event.target.value)}>
                    {

                        authorsList && authorsList.map(author => {

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
            <textarea defaultValue={formState.description} rows="20" cols="70" onBlur={(event) => handleFormState('description', event.target.value)} />
            <span> ISBN </span> <input defaultValue={formState.isbn} onBlur={(event) => handleFormState('isbn', event.target.value)} />
            <span> Pages count </span> <input defaultValue={formState.pagesNumber} onBlur={(event) => handleFormState('pagesNo', event.target.value)} />

            <span> Year Published </span> <input defaultValue={formState.publishYear} onBlur={(event) => handleFormState('year', event.target.value)} />
            <span> Image URL </span> <input defaultValue={formState.image} onBlur={(event) => handleFormState('imageURL', event.target.value)} />
            <div>
                <input type="submit" value="submit" />
                <button> Cancel</button>
            </div>
        </form >
    )
}

export default AddEditBook 
