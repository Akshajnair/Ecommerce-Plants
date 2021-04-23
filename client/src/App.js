import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'
class App extends Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div className="u-body u-overlap u-overlap-transparent">
        <Router>
          <Header/>
          <Route
            exact
            path='/'
            render={props => {return <Home  />
            }}
          />
        </Router>
      </div>
    )
  }
}

export default App
