import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as actions from '../actions/actions'

function AddEditCategory({ location: { state: details } }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [title, setTitle] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.AddEditCategory({ id: details.id, name: title }))
        history.push('/')
    }


    return (
        <form onSubmit={handleSubmit}>
            <span> Title </span> <input onChange={(event) => setTitle(event.target.value)} defaultValue={details && details.name} />
            <input type="submit" value="save" />
        </form>
    )
}

export default AddEditCategory 
