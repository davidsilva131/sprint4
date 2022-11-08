import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Verification from "../components/verification/Verification";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="verification" element={<Verification />} />

            </Routes>

        </BrowserRouter>
    )
}

export default Router;
