import React from 'react'
import { useParams } from 'react-router-dom'

const CountrytResultComponent = () => {
    let {countryname}= useParams()
  return (
    <div>Webcams for {countryname}</div>
  )
}

export default CountrytResultComponent