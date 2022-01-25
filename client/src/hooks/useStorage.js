import { useState } from "react"

const useStorage = (key, defaultValue) => {
  const [ storage, setStorage ] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;

    } catch (error) {
      return defaultValue;
    }
  });
  
  const addData = data => {
    try {
      setStorage(data)
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  }

  const removeItem = () => {
    localStorage.removeItem(key);
  }


  return { storage, addData, removeItem  }
}

export default useStorage