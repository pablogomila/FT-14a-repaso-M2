import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to='/class'>Ir a los contactos CLASS</Link>
      <Link to='/function'>Ir a los contactos FUNCTION</Link>
    </div>
  )
}
