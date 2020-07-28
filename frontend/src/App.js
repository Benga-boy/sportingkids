import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Home />
      </Switch>
    </BrowserRouter>
  )
}

export default App
