import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCategoryWebcamsQuery } from './features/apiSlice'
import WebcamBoxComponent from './webcam'

const CategoryResultComponent = () => {
    let {categoryname}= useParams()
    const {data: webcamsobject , isLoading: isLoadingWebcams, isError: isErrorWebcams }= useGetCategoryWebcamsQuery(categoryname)
  
    if(isLoadingWebcams){
      return '...'
    }
  
    if(isErrorWebcams){
      return 'something went wrong :('
    }

    const webcams= webcamsobject && webcamsobject.webcams
    return (
    <div>
        <h4>   Webcams for {categoryname}</h4>
        <div>
          {webcams.map(webcam=>(
            <WebcamBoxComponent webcam={webcam}/>
          ))}
        </div>
    </div>
  )
}

export default CategoryResultComponent