/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCategoryWebcamsQuery } from './features/apiSlice';
import WebcamBoxComponent from './webcam';

const CategoryResultComponent = () => {
    let { categoryname, categoryid } = useParams();
    const { data: webcamsobject, isLoading: isLoadingWebcams, isError: isErrorWebcams } = useGetCategoryWebcamsQuery(categoryid);

    if (isLoadingWebcams) {
        return '...';
    }

    if (isErrorWebcams) {
        return 'something went wrong :(';
    }

    const webcams = webcamsobject && webcamsobject.webcams;
    console.log(webcams);
    return (
        <div className="webcams">
            <h4>   Webcams for {categoryname}</h4>
            <div>
                {webcams.length > 0 ? webcams.map(webcam => (
                    <WebcamBoxComponent webcam={webcam}/>
                )) : <div >No webcams</div>}
            </div>
        </div>
    );
};

export default CategoryResultComponent;
