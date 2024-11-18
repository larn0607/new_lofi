import React, { useEffect, useState } from 'react'
import { logoGif } from '../../assets/images/index.js'

const Intro = () => {

  const [introFlag, setIntroFlag] = useState<boolean>(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setIntroFlag(false);
    }, 1500)

    return () => {
      clearTimeout(time)
    }
  }, [])

  return (
    <div className={`absolute inset-0 bg-intro ${introFlag ? "opacity-100 z-50" : "opacity-0 z-0"} transition-all ease-in-out duration-500 flex justify-center items-center`}>
      <img 
        src={logoGif} 
        alt="logo" 
        width={300}
      />
    </div>
  )
}

export default Intro