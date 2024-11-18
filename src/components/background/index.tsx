import React from 'react'
import Video from '../Video.tsx'
import Videos from '../../assets/videos/index.js'

const Background = () => {
  return (
    <>
      <Video
        src={Videos.slowGarden.gardenDay}
      />
    </>
  )
}

export default Background