/* eslint-disable no-alert */
import React from 'react';
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
        navigate(`${position.coords.latitude}, ${position.coords.longitude}, 10`);
    }

    function returnError (error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied acess ");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location Information is unavailable");
                break;
            case error.TIMEOUT:
                alert("request timeout");
                break;
            case error.UKNOWN_ERROR:
                alert("Something ent wrong");
                break;
            default:
                alert("Something went wrong");
                break;
        }
    }
    return (
        <div>
            Get My Location
            <span>
                Allow this website to acess your location
                <div>
                    <span onClick={getLocation()}>Yes</span>
                    <span onClick={navigate("446.54,7.98,10")}>No</span>
                </div>
            </span>
        </div>
    );
}
