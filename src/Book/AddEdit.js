import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as actions from '../actions'

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
    const [isValidUrl, setIsValidUrl] = React.useState(true)

    const dispatch = useDispatch()
    const history = useHistory()
    let authorsList = useSelector(store => store.Author.list)
    let categoriesList = useSelector(store => store.Category.list)


    React.useEffect(() => {
        if (!categoriesList) dispatch(actions.fetchListCategories())
        if (!authorsList) dispatch(actions.fetchListAuthors())
    })



    const handleFormState = (field, value) => {
        setFormState((oldState) => {
            return {
                ...oldState,
                [field]: value
            }
        })
    }

    const isUrl = (value) => {
        const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        return regexp.test(value)
    }

    const setUrl = (url) => {
        if (isUrl(url)) {
            handleFormState('imageURL', url)
        }
        else {
            setIsValidUrl(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (details) {
            dispatch(actions.editBook(formState))
        }
        else { dispatch(actions.addBook(formState)) }

        history.push('/')
    }


    return (
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
            <span> Title </span> <input defaultValue={formState.title} onBlur={(event) => handleFormState('title', event.target.value)} />
            <div className="form_select">
                <span> Author</span>
                {authorsList && <select onChange={(event) => handleFormState('author', event.target.value)}>
                    {

                        authorsList && authorsList.map(author =>

                            <option selected={details && details.author === author.id} key={author.id}>{author.name}</option>
                        )
                    }

                </select>}

                <span> Category</span>
                {categoriesList && <select onChange={(event) => handleFormState('category', event.target.value)}>
                    {

                        categoriesList && categoriesList.map(category => <option selected={details && details.category === category.id} key={category.id}>{category.name}</option>)
                    }
                </select>}
            </div>
            <textarea defaultValue={formState.description} rows="20" cols="70" onBlur={(event) => handleFormState('description', event.target.value)} />
            <span> ISBN </span> <input defaultValue={formState.isbn} onBlur={(event) => handleFormState('isbn', event.target.value)} />
            <span> Pages count </span> <input defaultValue={formState.pagesNumber} onBlur={(event) => handleFormState('pagesNo', event.target.value)} />

            <span> Year Published </span> <input defaultValue={formState.publishYear} onBlur={(event) => handleFormState('year', event.target.value)} />
            <span> Image URL </span> <input className={isValidUrl ? '' : 'form_error'} defaultValue={formState.imageURL} onBlur={(event) => setUrl(event.target.value)} />
            <div>
                <input type="submit" value="submit" />
                <button> Cancel</button>
            </div>
        </form >
    )
}

export default AddEditBook 
