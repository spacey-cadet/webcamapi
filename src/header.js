import React from 'react';
import { Outlet } from 'react-router-dom';

export default function HeaderComponent () {
    return (
        <div className="header_div">
            <h1 className="header">See <span>World</span> </h1>
            <Outlet/>
        </div>
    );
}
