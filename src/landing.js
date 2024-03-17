import React from 'react';
import { useGetWebcamsQuery } from "./features/apiSlice";
import WebcamBoxComponent from "./webcam";

const LandingWebcamsComponent = () => {
    const { data: webcamsobject, isLoading: isLoadingWebcams, isError: isErrorWebcams } = useGetWebcamsQuery();

    if (isLoadingWebcams) {
        return '...';
    }

    if (isErrorWebcams) {
        return 'something went wrong :(';
    }

    const webcams = webcamsobject && webcamsobject.webcams;

    return (
        <div className="webcams" key="webcams">
            {webcams && webcams.map(webcam => (
                <WebcamBoxComponent webcam={webcam}/>
            ))}
        </div>
    );
};

export default LandingWebcamsComponent;
