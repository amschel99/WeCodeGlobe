import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'


const App = () => {
  return (
<Routes>
  <Route path='/' element={<Navbar/>}/>  
</Routes>
  )
}

export default App