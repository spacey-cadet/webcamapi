import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetContinentsWebcamsQuery} from './features/apiSlice'
import WebcamBoxComponent from './webcam'

const ContinentResultComponent = () => {
  let { continentname }=useParams()
  const {data: webcamsobject , isLoading: isLoadingWebcams, isError: isErrorWebcams }= useGetContinentsWebcamsQuery(continentname)
   
  if(isLoadingWebcams){
    return '...'
  }

  if(isErrorWebcams){
    return 'something went wrong :('
  }

  const webcams=webcamsobject && webcamsobject.webcams
  
  return (
    <div>
      <h4>Webcams for {continentname}</h4>
      <div>
        {webcams.map(webcam=>(
          <WebcamBoxComponent webcam={webcam}/>
        ))}
      </div>
    </div>
  )
}

export default ContinentResultComponent