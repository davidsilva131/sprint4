import { Box, CircularProgress } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllOrders from "../components/allorders/AllOrders";
import FoodDetails from "../components/foodDetails/FoodDetails";
import { Home } from "../components/home/Home";
import NavBar from "../components/layout/NavBar";
import Login from "../components/login/Login";
import NoMatch from "../components/nomatch/NoMatch";
import AddCard from "../components/payment/AddCard";
import Payment from "../components/payment/Payment";
import Profile from "../components/profile/Profile";
import ProfileEdit from "../components/profile/ProfileEdit";
import Register from "../components/register/Register";
import Restaurant from "../components/restaurant/Restaurant";
import Search from "../components/search/Search";
import Verification from "../components/verification/Verification";
import { auth } from "../firebase/firebaseConfig";
import { userLoginSync } from "../redux/actions/userAction";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined)
    // const [check, setCheck] = useState(true)
    const userStorage = useSelector((store) => store.user);
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
            // setCheck(true)
            if (Object.entries(userStorage).length === 0) {
                const {
                    displayName,
                    email,
                    accessToken,
                    photoURL,
                    uid
                } = user.auth.currentUser;
                dispatch(
                    userLoginSync({
                        name: displayName,
                        email,
                        accessToken,
                        photoURL,
                        uid,
                        error: false,
                    })
                );
            }
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
                        <Route path="allorders" element={<AllOrders />} />
                    </Route>
                    <Route path="restaurant" element={<Restaurant />} />
                    <Route path="profileedit" element={<ProfileEdit />} />
                    <Route path="fooddetails" element={<FoodDetails />} />
                    <Route path="payment" element={<Payment />} />
                    <Route path="addcard" element={<AddCard />} />
                </Route>
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
