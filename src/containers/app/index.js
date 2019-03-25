import React from 'react'
import { Route, Link } from 'react-router-dom'
import Upload from './../../Components/Upload.js'
import About from './../../Components/About.js'
import Logout from './../../Components/Logout.js'
import Header from './../../Components/Header.js'
import Home from './../../Components/Home.js'

const App = () => (
  <div>
    <Header></Header>

    <main>

      <Route exact path="/about" component={About} />
      <Route exact path="/upload" component={Upload} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/" component={Home} />      
      

    </main>
  </div>
)

export default App
