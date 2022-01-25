import React from 'react'

const EmptyState = ({ icon, text, textSm }) => {

  return (
    <div className="px-5 py-3 text-center mt-5">
      {icon}
      <p className={`my-3 ${textSm ? 'small' : 'h6'} text-color w-75 mx-auto`}>{text}</p>
    </div>
  )
}

export default EmptyState
