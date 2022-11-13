import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PublicRouter = ({ isAuthentication }) => {

    return (
        <div>
            {isAuthentication ? <Navigate to="/home" /> : <Outlet />}
        </div>
    )
}

export default PublicRouter