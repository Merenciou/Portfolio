import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Home from './pages/Home/Home'
import Navbar  from './components/navbar/Navbar'
// import About from './pages/About/About'
// import Projects from './pages/Projects/Projects'
import Knowledges from './pages/Knowledge/Knowledge'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {
      <div>
        <Navbar/>
        <Knowledges/>

      </div>
      
    
    }
  </StrictMode>,
)
