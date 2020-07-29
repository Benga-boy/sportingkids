import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import About from './components/common/About'
import SchoolServices from './components/SchoolServices'
import Footer from './components/common/Footer'
import WhatsOn from './components/WhatsOn'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/schoolservices" component={SchoolServices} />
        <Route path="/whatson" component={WhatsOn} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
