import React, { useState } from 'react'
import Button from '../atoms/Button'

const BtnToggleable = ({ truthy, falsy, initialState, customHandle, disabled } = { initialState: false }) => {
  const [toggle, setToggle ] = useState(initialState) 
  
  const handleToggle = ()=> {
    setToggle(!toggle);
    
    customHandle(!toggle);
  }

  return (
    <Button
      styles="btn btn-sm bg-color text-color rounded-0 ms-1"
      handleClick={handleToggle}
      disabled={disabled}
    >
      {toggle ? truthy : falsy}
    </Button>
  );
}

export default BtnToggleable
