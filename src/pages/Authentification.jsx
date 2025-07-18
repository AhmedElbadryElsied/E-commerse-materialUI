import React from 'react'
import Login from '../Components/Authentification/Login'
import Register from '../Components/Authentification/Register'
import Reset from '../Components/Authentification/Reset'

function Authentification() {
  return (
    <div>
      <Register />
      <Login />
      <Reset />
    </div>
  )
}

export default Authentification