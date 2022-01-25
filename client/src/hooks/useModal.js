import React, { useState } from 'react'

const useModal = (initialVisibility = false) => {
  const [visibility, setModal] = useState(initialVisibility)
  const showModal = () => setModal(true)
  const closeModal = () => setModal(false)

 return {
   visibility,
   showModal,
   closeModal
 }
}

export default useModal
