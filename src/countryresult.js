import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCountryWebcamsQuery } from './features/apiSlice'
import WebcamBoxComponent from './webcam'

const CountrytResultComponent = () => {

    let {countryname, countrycode}= useParams()
    const {data: webcamsobject , isLoading: isLoadingWebcams, isError: isErrorWebcams }= useGetCountryWebcamsQuery(countrycode)
  
    if(isLoadingWebcams){
      return '...'
    }
  
    if(isErrorWebcams){
      return 'something went wrong :('
    }
    const webcams= webcamsobject && webcamsobject.webcams
    console.log(webcams)

    return (
    <div>
        <h4>Webcams for {countryname}</h4>
        <div>
          {webcams.length > 0 ? webcams.map(webcam=>(
            <WebcamBoxComponent webcam={webcam}/>
          )): <div>No webcams</div>}
        </div>
    </div>
  )
}

export default CountrytResultComponent