import React from 'react'
import Home from './Home'
import Navigation from './Navigation'
import About from './About'
import Golf from './Golf'
import Contact from './Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import all the login components...
import Username from './userlogin/Username'
import Reset from './userlogin/Reset'
import Register from './userlogin/Register'
import Recovery from './userlogin/Recovery'
import Profile from './userlogin/Profile'
import Password from './userlogin/Password'
import PageNotFound from './userlogin/PageNotFound'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/golf' element={<Golf />} />
          {/* Login routes  */}
          <Route exact path='/username' element={<Username />} />
          <Route exact path='/reset' element={<Reset />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/recovery' element={<Recovery />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/password' element={<Password />} />
          <Route exact path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
