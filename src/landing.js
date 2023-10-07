import { useGetCategoriesQuery,
  useGetContinentsQuery, useGetWebcamsQuery } from "./features/apiSlice"

const Landing = () => {

  const {data: webcamsobject  }= useGetWebcamsQuery()
  const {data: categories , isLoadingcategories, isErrorCategories}= useGetCategoriesQuery()
  const {data: continents , isLoadingContinents, isErrorContinents}= useGetContinentsQuery()

  if(isLoadingContinents){
    return '...'
  }
  if(isLoadingcategories){
    return '...'
  }
  if(isErrorCategories){
    return 'something went wrong :('
  }
  if(isErrorContinents){
    return 'something went wrong :('
  }
  

    console.log(categories)
    console.log(continents)
    console.log(webcamsobject)
  return (
    <div>
      {Object.keys(webcamsobject).map(webcams=>(
        webcamsobject[webcams].flat().map( webcam=>(
          <div key={webcam.webcamId}>
            <img src={webcam.image.current} alt=''/>
          </div>
        ))
      ))}
     
    </div>
  )
}

export default Landing