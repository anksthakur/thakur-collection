import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1> Error : 404 Route not found</h1>
      <NavLink to="/"><button>Go Back to Home Page</button></NavLink>
    </div>
  )
}

export default ErrorPage
