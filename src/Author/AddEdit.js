import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as actions from '../actions/actions'

function AddEditAuthor({ location: { state: details } }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [title, setTitle] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const newAuthor = { name: title }
        if (details && details.id) newAuthor.id = details.id
        dispatch(actions.AddEditAuthor(newAuthor))
        history.push('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <span> Title </span> <input onChange={(event) => setTitle(event.target.value)} defaultValue={details && details.name} />
            <input type="submit" value="save" />
        </form>
    )
}

export default AddEditAuthor 
