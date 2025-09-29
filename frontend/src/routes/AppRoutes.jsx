import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Quiz from '../pages/Quiz'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
    </Routes>
  )
}

export default AppRoutes