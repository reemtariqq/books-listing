import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BookList from '../Book/List'
import AddEditBook from '../Book/AddEdit'
import AddEditCategory from '../Category/AddEdit'
import AddEditAuthor from '../Author/AddEdit'
import CategoryDetails from '../Category/Details'
import AuthorDetails from '../Author/Details'


function AppRoutes() {
    return (
        <div>
            <div>
                <Switch>
                    <Route exact path="/" component={BookList} />
                    <Route exact path="/book/new" component={AddEditBook} />
                    <Route exact path="/category/new" component={AddEditCategory} />
                    <Route exact path="/author/new" component={AddEditAuthor} />
                    <Route exact path="/category/:id" component={CategoryDetails} />
                    <Route exact path="/author/:id" component={AuthorDetails} />
                    <Route exact path="/book/:id/edit" component={AddEditBook} />
                    <Route exact path="/category/:id/edit" component={AddEditCategory} />
                    <Route exact path="/author/:id/edit" component={AddEditAuthor} />

                </Switch>
            </div>

        </div>
    )
}

export default AppRoutes