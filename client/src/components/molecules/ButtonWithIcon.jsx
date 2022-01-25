import React from 'react'
import Button from '../atoms/Button'

const ButtonWithIcon = ({children, icon, styles, ...props}) => {

  return <Button styles={`btn ${styles}`} {...props}>
    {icon}
    {children}
  </Button>
}

export default ButtonWithIcon
