import { useGetWebcamsQuery } from "./features/apiSlice"

const Landing = () => {

  const {data: webcamsobject , isLoading: isLoadingWebcams, isError: isErrorWebcams }= useGetWebcamsQuery()

  if(isLoadingWebcams){
    return '...'
  }

  if(isErrorWebcams){
    return 'something went wrong :('
  }
 
    const webcams = webcamsobject.webcams
    console.log(webcams)
   
  return (
    <div className='webcams'>
      {webcams.map(webcam=>(
        <div className='webcam' key={webcam.webcamId}>
          <img src={webcam.images.current.preview} alt=""/>
          <div className="webcamsInfo">{webcam.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Landing