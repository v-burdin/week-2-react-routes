import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/2e9ffefa-c1a8-4307-96f5-6b5dd2cadb95">Go To Profile</Link>
      <Link to="/dashboard/main">Go To Main</Link>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
