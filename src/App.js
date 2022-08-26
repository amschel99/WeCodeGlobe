import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Player from './components/Player'

const App = () => {
  return (
<Routes>
  <Route path='/' element={<Navbar/>}/>  
    <Route path='/player/:id' element={<Player/>}/> 
</Routes>
  )
}

export default App