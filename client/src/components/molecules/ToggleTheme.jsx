import React, { useEffect, useState } from 'react'
import useStorage from '../../hooks/useStorage';
import useUser from '../../hooks/useUser';

const ToggleTheme = () => {
  const [darkTheme, setDarkTheme] = useState();
  const { id } = useUser();
  const uniqueKey = id && `${id}_is-dark-theme`
  const { storage, addData } = useStorage(uniqueKey , darkTheme);

  const toggleTheme = ()=> {
    setDarkTheme(!darkTheme)
  } 

  function changeMedia(mq) {
    setDarkTheme(mq.matches);
  }
  
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addEventListener('change', changeMedia)

    if(!storage){
      setDarkTheme(mq.matches)
    }
 
    return () => {
      mq.removeEventListener('change', changeMedia)
    }
  }, [])

  useEffect(()=> {
    uniqueKey && addData(JSON.stringify(darkTheme))
    
    const currentTheme = darkTheme ? 'dark-theme' : 'light-theme';
    document.documentElement.setAttribute('theme', currentTheme);
  }, [darkTheme])

  return (
    <button onClick={toggleTheme} className='btn btn-sm btn-dark rounded-0 ms-3 toggle-theme'>
      {darkTheme ? '🌞' : '🌕'}
    </button>
  )
}

export default ToggleTheme
