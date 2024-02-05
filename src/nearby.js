import { useParams } from "react-router-dom"

export default async function NearbyWebcamsComponent(){
    const { nearby }= useParams()
    console.log(nearby)
    return(
        <div>
            Nearby webcams
        </div>
    )
}