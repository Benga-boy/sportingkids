import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Home from './components/common/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Home />
      </Switch>
    </BrowserRouter>
  )
}

export default App
