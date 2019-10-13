import ActionTypes from './actionsTypes'

export function fetchListBook(query) {
    return {
        type: ActionTypes.FETCH_LIST_BOOK,
        query
    }
}

export function fetchListSuccessBook(response) {

    return {
        type: ActionTypes.FETCH_LIST_SUCCESS_BOOK,
        list: response.body,
    }
}

export function fetchListErrorBook(err) {
    return {
        type: ActionTypes.FETCH_LIST_ERROR_BOOK,
        err,
    }
}


export function fetchListCategories() {
    return {
        type: ActionTypes.FETCH_LIST_CATEGORY,
    }
}

export function fetchListSuccessCategories(response) {

    return {
        type: ActionTypes.FETCH_LIST_SUCCESS_CATEGORY,
        list: response.body,
    }
}

export function fetchListErrorCategories(err) {
    return {
        type: ActionTypes.FETCH_LIST_ERROR_CATEGORY,
        err,
    }
}

export function fetchListAuthors() {

    return {
        type: ActionTypes.FETCH_LIST_AUTHOR,
    }
}

export function fetchListSuccessAuthors(response) {

    return {
        type: ActionTypes.FETCH_LIST_SUCCESS_AUTHOR,
        list: response.body,
    }
}

export function fetchListErrorAuthors(err) {
    return {
        type: ActionTypes.FETCH_LIST_ERROR_AUTHORS,
        err,
    }
}

export function setItemDetailsBook(details) {
    return {
        type: ActionTypes.SET_ITEM_DETAILS_BOOK,
        details,
    }
}

export function setItemDetailsAuthor(details) {
    return {
        type: ActionTypes.SET_ITEM_DETAILS_AUTHOR,
        details,
    }
}

export function setItemDetailsCategory(details) {
    return {
        type: ActionTypes.SET_ITEM_DETAILS_CATEGORY,
        details,
    }
}



export function fetchBook(query) {
    return {
        type: ActionTypes.FETCH_BOOK,
        query
    }
}

export function fetchSuccessBook(response) {
    return {
        type: ActionTypes.FETCH_SUCCESS_BOOK,
        details: response.details,
    }
}

export function fetchErrorBook(err) {
    return {
        type: ActionTypes.FETCH_ERROR_BOOK,
        err,
    }
}

export function fetchCategory(query) {
    return {
        type: ActionTypes.FETCH_CATEGORY,
        query
    }
}

export function fetchSuccessCategory(response) {
    return {
        type: ActionTypes.FETCH_SUCCESS_CATEGORY,
        details: response,
    }
}

export function fetchErrorCategory(err) {
    return {
        type: ActionTypes.FETCH_ERROR_CATEGORY,
        err,
    }
}


export function fetcAuthor(query) {
    return {
        type: ActionTypes.FETCH_AUTHOR,
        query
    }
}

export function fetchSuccessAuthor(response) {
    return {
        type: ActionTypes.FETCH_SUCCESS_AUTHOR,
        details: response.details,
    }
}

export function fetchErrorAuthor(err) {
    return {
        type: ActionTypes.FETCH_ERROR_AUTHOR,
        err,
    }
}

export function AddEditBook(newBook) {
    return {
        type: ActionTypes.ADDEDIT_BOOK,
        newBook
    }
}

export function AddEditSuccessBook(newBook) {
    return {
        type: ActionTypes.ADDEDIT_SUCCESS_BOOK,
        newBook
    }
}

export function AddEditErrorBook(err) {
    return {
        type: ActionTypes.ADDEDIT_ERROR_BOOK,
        err,
    }
}
