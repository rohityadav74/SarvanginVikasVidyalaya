import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import Programs from './Components/Programs/Programs'
import About from './Components/About/About'
import Latest from './Components/Latest/Latest'
import News from './Components/News/News'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title='Latest video'/>
        <Latest/>
        <Title subTitle='Update' title='Latest Announcement'/>
        <News/>
        <Title subTitle='Contact us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
