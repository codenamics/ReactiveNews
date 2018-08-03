import { hot } from "react-hot-loader"
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from "./components/layout/NavBar"
import Business from "./components/News/Business"
import ESPN from "./components/News/ESPN"
import Entertainment from "./components/News/Entertainment"
import Health from "./components/News/Health"
import Science from "./components/News/Science"
import Tech from "./components/News/Tech"
import { Provider } from "react-redux"
import store from "./store"

class App extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Business} />
              <Route exact path="/business" component={Business} />
              <Route exact path="/sport" component={ESPN} />
              <Route exact path="/entertainment" component={Entertainment} />
              <Route exact path="/health" component={Health} />
              <Route exact path="/science" component={Science} />
              <Route exact path="/tech" component={Tech} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(App)
