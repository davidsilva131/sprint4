import { Box, CircularProgress } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/home/Home";
import NavBar from "../components/layout/NavBar";
import Login from "../components/login/Login";
import NoMatch from "../components/nomatch/NoMatch";
import Profile from "../components/profile/Profile";
import ProfileEdit from "../components/profile/ProfileEdit";
import Register from "../components/register/Register";
import Restaurant from "../components/restaurant/Restaurant";
import Search from "../components/search/Search";
import Verification from "../components/verification/Verification";
import { auth } from "../firebase/firebaseConfig";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined)
    // const [check, setCheck] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user.uid);
            if (user?.uid) {
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
            // setCheck(true)
        })
    }, [setIsLoggedIn]);

    // if (!check) {
    //     return (
    //         <Box sx={{ display: 'flex' }}>
    //             <CircularProgress />
    //         </Box>
    //     )
    // }
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRouter isAuthentication={isLoggedIn} />}>
                    <Route path="/" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="verification" element={<Verification />} />
                </Route>
                <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
                    <Route element={<NavBar />} >
                        <Route path="home" element={<Home />} />
                        <Route path="search" element={<Search />} />
                        <Route path="profile" element={<Profile setIsLoggedIn={setIsLoggedIn} />} />
                    </Route>
                    <Route path="restaurant" element={<Restaurant />} />
                    <Route path="profileedit" element={<ProfileEdit />} />
                </Route>
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
