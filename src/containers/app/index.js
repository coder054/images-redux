import React from 'react'
import { Route } from 'react-router-dom'
import Upload from './../../Components/Upload.js'
import About from './../../Components/About.js'
import Logout from './../../Components/Logout.js'
import Header from './../../Components/Header.js'
import ImageList from './../../Components/ImageList/ImageList.js'
import AuthHandler from './../../Components/AuthHandler'
import PublicInfo from './../../Components/PublicInfo'
import requireAuth from './../../HOCs/requireAuth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <div>
    <Header />
    <ToastContainer />

    <main className="container">
      <Route path="/about" component={About} />
      <Route exact path="/upload" component={requireAuth(Upload)} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/oauth2/callback" component={AuthHandler} />
      <Route exact path="/public" component={PublicInfo} />
      <Route exact path="/" component={ImageList} />
    </main>
  </div>
)

export default App
