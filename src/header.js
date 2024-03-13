/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom';

export default function HeaderComponent () {
    return (
        <div>
            <h1 className="header">See World</h1>
            <Outlet/>
        </div>
    );
}
