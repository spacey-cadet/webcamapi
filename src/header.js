import {Outlet} from 'react-router-dom'

export default function HeaderComponent(){
    return (
        <div>
            <h1 classNme="header">See World</h1>
            <Outlet/>
        </div>
    )
}