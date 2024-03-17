/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetContinentsWebcamsQuery } from './features/apiSlice';
import WebcamBoxComponent from './webcam';

const ContinentResultComponent = () => {
    let { continentcode, continentname } = useParams();
    const { data: webcamsobject, isLoading: isLoadingWebcams, isError: isErrorWebcams } = useGetContinentsWebcamsQuery(continentcode);

    if (isLoadingWebcams) {
        return '...';
    }

    if (isErrorWebcams) {
        return 'something went wrong :(';
    }

    const webcams = webcamsobject && webcamsobject.webcams;

    return (
        <div className="webcams">
            <h4>Webcams for {continentname}</h4>
            <div>
                { webcams ? webcams.map(webcam => (
                    <WebcamBoxComponent webcam={webcam}/>
                )) : <div>No webcams</div>}
            </div>
        </div>
    );
};

export default ContinentResultComponent;
