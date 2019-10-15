import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as actions from '../actions/actions'

function AddEditAuthor({ location: { state: details } }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const newAuthor = { name: name }
        if (details && details.id) {
            newAuthor.id = details.id
            dispatch(actions.EditAuthor(newAuthor))
        }
        else {
            dispatch(actions.AddAuthor(newAuthor))
        }
        history.push('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <span> Title </span> <input onChange={(event) => setName(event.target.value)} defaultValue={details && details.name} />
            <input type="submit" value="save" />
        </form>
    )
}

export default AddEditAuthor 
