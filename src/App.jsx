import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.css'

import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import Aboutpage from './pages/Aboutpage'
import Educationpage from './pages/Educationpage'
import Skillpage from './pages/Skillpage'
import Notfound from './pages/Notfound'
import Contactpage from './pages/Contactpage'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route end path='/' element={<Homepage/>}/>
        <Route path='/About' element={<Aboutpage/>}/>
        <Route path='/education' element={<Educationpage/>}/>
        <Route path='/skill' element={<Skillpage/>}/>
        <Route path='/*' element={<Notfound/>}/>
        <Route path='/contact' element={<Contactpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
