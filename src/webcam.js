import React from 'react'

const WebcamBoxComponent = ({webcam}) => {
  return (
    <div className='webcam' key={webcam.webcamId}>
          <img src={webcam.images.current.preview} alt=""/>
          <div className="webcamsInfo">{webcam.title}</div>
    </div>
  )
}

export default WebcamBoxComponent