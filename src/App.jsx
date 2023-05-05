import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.css'

import Homepage from "./pages/Homepage"
import Aboutpage from './pages/Aboutpage'
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='home' element={<Homepage/>}/>
        <Route path='About' element={<Aboutpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
