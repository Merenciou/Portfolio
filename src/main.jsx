import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Home from './pages/Home/Home'
import Navbar  from './components/navbar/Navbar'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Knowledges from './pages/Knowledge/Knowledge'
import Contact from './pages/Contact/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {
      <div className='wrapper'>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Knowledges/>
        <Contact/>
      </div>
    }
  </StrictMode>,
)
