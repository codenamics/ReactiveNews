import { hot } from 'react-hot-loader'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './layout/NavBar'
import News from './components/News/News'
import SearchModal from './layout/SearchModal'
import Search from './components/News/Search'
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Route
              exact
              path='/'
              render={props => (
                <News value='business' headline='Business' {...props} />
              )}
            />
            <Route
              exact
              path='/business'
              render={props => (
                <News value='business' headline='Business' {...props} />
              )}
            />
            <Route
              exact
              path='/espn'
              render={props => (
                <News value='sport' headline='Sport' {...props} />
              )}
            />
            <Route
              exact
              path='/entertainment'
              render={props => (
                <News
                  value='entertainment'
                  headline='Entertainment'
                  {...props}
                />
              )}
            />
            {' '}
            <Route
              exact
              path='/health'
              render={props => (
                <News value='health' headline='Health' {...props} />
              )}
            />
            <Route
              exact
              path='/science'
              render={props => (
                <News value='science' headline='Science' {...props} />
              )}
            />
            <Route
              exact
              path='/tech'
              render={props => (
                <News value='technology' headline='Technology' {...props} />
              )}
            />
            <Route exact path='/search' component={SearchModal} />
            <Route exact path='/results' component={Search} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(App)
