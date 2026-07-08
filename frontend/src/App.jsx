import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col gap-4'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
