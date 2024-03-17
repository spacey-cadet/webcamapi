/* eslint-disable no-alert */
import React from "react";
import { useNavigate } from "react-router-dom";

export default function GetLocationComponent () {
    const navigate = useNavigate();

    function getLocation () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(returnPositon, returnError);
        } else {
            alert("Geolocation is not supported by this browser");
        }
    }

    function returnPositon (position) {
        navigate(`/#`);
    }

    function returnError (error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied access ");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location Information is unavailable");
                break;
            case error.TIMEOUT:
                alert("request timeout");
                break;
            case error.UKNOWN_ERROR:
                alert("Something went wrong");
                break;
            default:
                alert("Something went wrong");
                break;
        }
    }
    return (
        <div className="sharelocation">
            <div className="location-btns">
                <p>You can see webcams for surrounding places. Would you like to share your location?</p>
                <button onClick={getLocation}>
                    Share Location
                </button>
            </div>
        </div>
    );
}
