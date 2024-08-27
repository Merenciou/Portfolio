import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/Home'
import Navbar  from './components/navbar/Navbar'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {
      <div>
        <Navbar/>
        <Home/>

      </div>
      
    
    }
  </StrictMode>,
)
