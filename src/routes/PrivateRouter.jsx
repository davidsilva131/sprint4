import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({ isAuthentication }) => {
    return <div>{isAuthentication ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default PrivateRouter;