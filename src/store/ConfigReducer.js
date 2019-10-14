import actionTypes from '../actions/actionsTypes'



function configReducer(state = {}, action) {

    switch (action.type) {

        case actionTypes.GET_EDIT_MODE:
            return getIsEditMode(state)

        case actionTypes.SET_EDIT_MODE:
            return setIsEditMode(state, action)

        default:
            return state
    }
}

function getIsEditMode(state) {
    return state
}


function setIsEditMode(state, action) {
    return {
        ...state,
        isEditMode: action.isEditMode
    }
}

export default configReducer