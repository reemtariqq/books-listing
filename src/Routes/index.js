import React from 'react'
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom'
import BookList from '../Book/List'
import AddEditBook from '../Book/AddEdit'
import AddEditCategory from '../Category/AddEdit'
import AddEditAuthor from '../Author/AddEdit'

function AppRoutes() {
    return (
        <div>
            {/* <Router> */}
            <div>
                <Switch>
                    <Route exact path="/" component={withRouter(BookList)} />
                    <Route exact exact path="/book/new" component={AddEditBook} />
                    <Route exact path="/category/new" component={AddEditCategory} />
                    <Route exact path="/author/new" component={AddEditAuthor} />
                    {/* <Route exact path="/book/:id" component={AddEditBook} />
                        <Route exact path="/category/:id" component={AddEditCategory} />
                        <Route exact path="/author/:id" component={AddEditAuthor} /> */}
                </Switch>
            </div>
            {/* </Router> */}
        </div>
    )
}

export default AppRoutes