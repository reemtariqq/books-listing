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

export function fetchSuccessBook(book) {
    return {
        type: ActionTypes.FETCH_SUCCESS_BOOK,
        details: book,
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

export function fetchAuthor(query) {
    return {
        type: ActionTypes.FETCH_AUTHOR,
        query
    }
}

export function fetchSuccessAuthor(details) {
    return {
        type: ActionTypes.FETCH_SUCCESS_AUTHOR,
        details
    }
}

export function fetchErrorAuthor(err) {
    return {
        type: ActionTypes.FETCH_ERROR_AUTHOR,
        err,
    }
}

export function addBook(newBook) {
    return {
        type: ActionTypes.ADD_BOOK,
        newBook
    }
}

export function addSuccessBook(item) {
    return {
        type: ActionTypes.ADD_SUCCESS_BOOK,
        item
    }
}

export function addErrorBook(err) {
    return {
        type: ActionTypes.ADD_ERROR_BOOK,
        err,
    }
}

export function addAuthor(newAuthor) {
    return {
        type: ActionTypes.ADD_AUTHOR,
        newAuthor
    }
}

export function addSuccessAuthor(item) {
    return {
        type: ActionTypes.ADD_SUCCESS_AUTHOR,
        item
    }
}

export function addErrorAuthor(err) {
    return {
        type: ActionTypes.ADD_ERROR_AUTHOR,
        err,
    }
}

export function addCategory(item) {
    return {
        type: ActionTypes.ADD_CATEGORY,
        item
    }
}

export function addSuccessCategory(item) {
    return {
        type: ActionTypes.ADD_SUCCESS_CATEGORY,
        item
    }
}

export function addErrorCategory(err) {
    return {
        type: ActionTypes.ADD_ERROR_CATEGORY,
        err,
    }
}


export function editBook(item) {
    return {
        type: ActionTypes.EDIT_BOOK,
        item
    }
}

export function editSuccessBook(item) {
    return {
        type: ActionTypes.EDIT_SUCCESS_BOOK,
        item
    }
}

export function editErrorBook(err) {
    return {
        type: ActionTypes.EDIT_ERROR_BOOK,
        err,
    }
}


export function editCategory(item) {
    return {
        type: ActionTypes.EDIT_CATEGORY,
        item
    }
}

export function editSuccessCategory(item) {
    return {
        type: ActionTypes.EDIT_SUCCESS_CATEGORY,
        item
    }
}

export function editErrorCategory(err) {
    return {
        type: ActionTypes.EDIT_ERROR_CATEGORY,
        err,
    }
}

export function editAuthor(item) {
    return {
        type: ActionTypes.EDIT_AUTHOR,
        item
    }
}

export function editSuccessAuthor(item) {
    return {
        type: ActionTypes.EDIT_SUCCESS_AUTHOR,
        item
    }
}

export function editErrorAuthor(err) {
    return {
        type: ActionTypes.EDIT_ERROR_AUTHOR,
        err,
    }
}


export function getEditMode() {
    return {
        type: ActionTypes.GET_EDIT_MODE,
    }
}

export function setEditMode(isEditMode) {
    return {
        type: ActionTypes.SET_EDIT_MODE,
        isEditMode,
    }
}
