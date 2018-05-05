import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Router from './routes'
import Sidebar from './components/Sidebar'
import Section from './components/Section'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path="/:section" component={Section} />
            <Route component={() => <div>Error 404</div>} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
