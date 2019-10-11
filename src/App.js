import React from 'react' 
import './App.scss' 
import Header from './Header/Header'
import BookList from './Book'
import CategoryList from './Category'
import AuthorsList from './Author'
import AppRoutes from './Routes'

function App() {
  console.log(AppRoutes)
  return (
    <React.Fragment>
      <header><Header /></header>
      <div id="main">
        <nav>
          <div>
            <CategoryList />
            <AuthorsList />
          </div>
        </nav>
        <article><AppRoutes /></article>

      </div>

    </React.Fragment>
  )
}

export default App 
