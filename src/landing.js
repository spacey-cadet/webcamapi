import { useGetCategoriesQuery,
  useGetContinentsQuery, useGetWebcamsQuery } from "./features/apiSlice"

const Landing = () => {

  const {data: webcamsobject , isLoadingWebcams, isErrorWebcams }= useGetWebcamsQuery()
  const {data: categories , isLoadingcategories, isErrorCategories}= useGetCategoriesQuery()
  const {data: continents , isLoadingContinents, isErrorContinents}= useGetContinentsQuery()

  if(isLoadingContinents){
    return '...'
  }
  if(isLoadingcategories){
    return '...'
  }
  if(isLoadingWebcams){
    return '...'
  }
  if(isErrorCategories){
    return 'something went wrong :('
  }
  if(isErrorWebcams){
    return 'something went wrong :('
  }
  if(isErrorContinents){
    return 'something went wrong :('
  }
  
    console.log(categories)
    console.log(continents)
    console.log(webcamsobject.webcams)
    const webcams = webcamsobject.webcams
   
  return (
    <div>
      {webcams.map(webcam=>(
        <div key={webcam.webcamId}>
          <img src={webcam.images.current.preview} alt=""/>
          <img src={webcam.images.current.icon} alt=""/>
          <img src={webcam.images.current.thumbnail} alt=""/>
          <img src={webcam.images.daylight.thumbnail} alt=""/>
          <img src={webcam.images.daylight.preview} alt=""/>
        </div>
      ))}


    </div>
  )
}

export default Landing