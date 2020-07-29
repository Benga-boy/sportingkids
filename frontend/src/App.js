import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import About from './components/common/About'
import SchoolServices from './components/SchoolServices'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/schoolservices" component={SchoolServices} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
