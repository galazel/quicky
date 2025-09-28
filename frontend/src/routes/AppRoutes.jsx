import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import Login from '../pages/Login'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default AppRoutes