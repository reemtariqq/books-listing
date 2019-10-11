import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import BookList from '../Book/List'
import AddEditBook from '../Book/AddEdit'
import AddEditCategory from '../Category/AddEdit'
import AddEditAuthor from '../Author/AddEdit'

function AppRoutes() {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={BookList} />
                        <Route exact path="/book/new" component={AddEditBook} />
                        <Route path="/category/new" component={AddEditCategory} />
                        <Route path="/author/new" component={AddEditAuthor} />
                        {/* <Route component={Notfound} /> */}
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default AppRoutes