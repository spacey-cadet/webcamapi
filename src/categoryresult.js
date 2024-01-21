import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryResultComponent = () => {
    let {categoryname}= useParams()
  return (
    <div>Webcams for {categoryname}</div>
  )
}

export default CategoryResultComponent