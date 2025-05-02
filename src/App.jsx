import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import TeamsPage from './Component/TeamsPage'
import TeamDetails from './Component/TeamDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/> */}
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<TeamsPage />} />
    <Route path='/team/:name' element={<TeamDetails />} />
  </Routes>
</BrowserRouter>




  
    </>
  )
}

export default App
