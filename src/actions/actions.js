import ActionTypes from './actionsTypes'

export function fetchListBook() {
    return {
        type: ActionTypes.FETCH_LIST_BOOK,
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
        type: ActionTypes.FETCH_LIST_AUTHORS,
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