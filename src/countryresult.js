import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCountryWebcamsQuery } from './features/apiSlice'
import WebcamBoxComponent from './webcam'

const CountrytResultComponent = () => {

    let {countryname}= useParams()
    const {data: webcamsobject , isLoading: isLoadingWebcams, isError: isErrorWebcams }= useGetCountryWebcamsQuery(countryname)
  
    if(isLoadingWebcams){
      return '...'
    }
  
    if(isErrorWebcams){
      return 'something went wrong :('
    }
    const webcams= webcamsobject && webcamsobject.webcams
    return (
    <div>
        <h4>Webcams for {countryname}</h4>
        <div>
          {webcams.map(webcam=>(
            <WebcamBoxComponent webcam={webcam}/>
          ))}
        </div>
    </div>
  )
}

export default CountrytResultComponent