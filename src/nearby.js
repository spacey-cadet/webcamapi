/* eslint-disable max-len */
import React from 'react';
import { useParams } from "react-router-dom";
import { useGetNearbyWebcamsQuery } from './features/apiSlice';
import WebcamBoxComponent from './webcam';

export default async function NearbyWebcamsComponent () {
    let { nearby } = useParams();
    const { data: webcamsobject, isLoading: isLoadingWebcams, isError: isErrorWebcams } = useGetNearbyWebcamsQuery(nearby);

    if (isLoadingWebcams) {
        return '...';
    }

    if (isErrorWebcams) {
        return 'something went wrong :(';
    }

    const webcams = webcamsobject && webcamsobject.webcams;
    console.log(webcams);
    return (
        <div>
            <p>Webcams near you</p>
            {webcams.length > 0 ? webcams.map(webcam => (
                <WebcamBoxComponent webcam={webcam}/>
            )) : <div >No webcams</div>}
        </div>
    );
}
