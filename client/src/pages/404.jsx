import React from 'react'
import { frases, numeroRandom } from '../util'
import Button from '../components/atoms/Button'

const NotFound = ({ history }) => {
  const goBack = ()=> history.goBack();
  const frase = frases[numeroRandom(frases.length)];

  return (
    <div className='bg-color text-color d-flex flex-column justify-content-between vh-100 px-5 py-4'>
      <div>
        <h1 className='text-color display-3 fw-bold'>404</h1>
        <h2 className='text-color display-6 fw-bold'>Not Found</h2>
      </div>
      <div className='col-md-5 text-sm-start '>
        <blockquote className='lead p-0 m-0'>
          <span className='ql-font-serif serif'>“</span>
            {frase.quote}
          <span className='ql-font-serif serif'>”</span>
        </blockquote>
        <cite className='mt-2 d-grid text-md-end'>― {frase.from}</cite>
      </div>
      <div>
        <Button styles='btn-dark' handleClick={goBack}> Volver </Button>
      </div>
    </div>
  )
}

export default NotFound
