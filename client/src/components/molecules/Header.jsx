import React from 'react'

const Header = ({ title, subtitle }) => {
  return (
    <header className='bg-color text-color p-5'>
      <h1 className='display-3 fw-bold text-color'>{title}</h1>
      <p className='lead'> {subtitle} </p>
    </header>
  )
}

export default Header
