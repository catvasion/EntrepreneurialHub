import React from 'react'

import {Blog, Features, Footer, Header, Possibility, What} from './containers'
import {CTA, Brand, Navbar} from './components'

const App = () => {
  return (
    <div className='App'>
        <div className='gradiant__bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <What/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App