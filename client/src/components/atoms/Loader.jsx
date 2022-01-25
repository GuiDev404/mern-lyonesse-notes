import React from 'react'

const Loader = () => {
  return (
    <section className='text-center py-4'>
      <section className="spinner-grow text-color" role="status">
        <span className="visually-hidden">Cargando...</span>
      </section>
    </section>
  )
}

export default Loader
