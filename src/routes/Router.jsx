import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/home/Home";
import NavBar from "../components/layout/NavBar";
import Login from "../components/login/Login";
import Profile from "../components/profile/Profile";
import Register from "../components/register/Register";
import Search from "../components/search/Search";
import Verification from "../components/verification/Verification";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="verification" element={<Verification />} />
                <Route element={<NavBar />} >
                    <Route path="home" element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="profile" element={<Profile />} />
                </Route>

            </Routes>

        </BrowserRouter>
    )
}

export default Router;
