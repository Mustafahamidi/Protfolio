
import { Routes,Route } from 'react-router-dom'
import Home from './components/Hero'
import Projects from './components/Projects'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'

export default function App() {

  return(
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/skill' element={<Skill />} />
        </Routes>
        <Footer />

    </>
  )
}