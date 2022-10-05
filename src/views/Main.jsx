import React from 'react'
import {} from '@material-ui/core'
import { Link } from 'react-router-dom'

function Main(props) {
  return (
    <div>
      <h1>AstroCast</h1>
      <span>
        <Link to="/">Home</Link> | <Link to="/locations">Locations</Link>
        </span>
      <hr/>
    </div>
  )
}

export default Main