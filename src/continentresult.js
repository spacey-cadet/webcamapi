import React from 'react'
import { useParams } from 'react-router-dom'

const ContinentResultComponent = () => {
  let { continentname }=useParams()
  console.log(continentname)
  return (
    <div>Webcams for {continentname}</div>
  )
}

export default ContinentResultComponent