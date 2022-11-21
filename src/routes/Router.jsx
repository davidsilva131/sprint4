import { Box, CircularProgress } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllOrders from "../components/allorders/AllOrders";
import OrderDetail from "../components/allorders/OrderDetail";
import AddFood from "../components/dashboardAdmin/AddFood";
import AddRestaurant from "../components/dashboardAdmin/AddRestaurant";
import DashboardAdmin from "../components/dashboardAdmin/DashboardAdmin";
import FoodAdmin from "../components/dashboardAdmin/FoodAdmin";
import Delivery from "../components/delivery/Delivery";
import OrderAcepted from "../components/delivery/OrderAcepted";
import FoodDetails from "../components/foodDetails/FoodDetails";
import { Home } from "../components/home/Home";
import AdminLayout from "../components/layout/AdminLayout";
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
import { auth } from "../firebase/firebaseConfig";
import { getRestaurantsAsync } from "../redux/actions/restaurantsAction";
import { userLoginSync } from "../redux/actions/userAction";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined)
    const [check, setCheck] = useState(true)
    const userStorage = useSelector((store) => store.user);
    const [admin, setAdmin] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true)
                dispatch(getRestaurantsAsync())
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
                user.uid === 'Dt3vYg5n9pe9iDhTXUoO51FmwJh1' ? (setAdmin(true)) : (setAdmin(false))
            } else {
                setIsLoggedIn(false)
            }
            setCheck(false)
        })
    }, [isLoggedIn, check]);

    if (check) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRouter isAuthentication={isLoggedIn} />}>
                    <Route path="/" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
                {
                    admin ?
                        (
                            <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
                                <Route element={<AdminLayout setIsLoggedIn={setIsLoggedIn} />}>
                                    <Route path="home" element={<DashboardAdmin />} />
                                    <Route path="adminfood" element={<FoodAdmin />}></Route>
                                    <Route path="addrestaurant" element={<AddRestaurant />}></Route>
                                    <Route path="addfood" element={<AddFood />}></Route>
                                </Route>
                            </Route>
                        ) :
                        (
                            <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
                                <Route element={<NavBar />} >
                                    <Route path="home" element={<Home />} />
                                    <Route path="search" element={<Search />} />
                                    <Route path="profile" element={<Profile setIsLoggedIn={setIsLoggedIn} />} />
                                    <Route path="allorders" element={<AllOrders />} />
                                    <Route path="orderdetail/:id" element={<OrderDetail />} />
                                </Route>
                                <Route path="restaurant/:name" element={<Restaurant />} />
                                <Route path="profileedit" element={<ProfileEdit />} />
                                <Route path="fooddetails/:name" element={<FoodDetails />} />
                                <Route path="payment" element={<Payment />} />
                                <Route path="addcard" element={<AddCard />} />
                                <Route path="delivery" element={<Delivery />} />
                                <Route path="orderacepted" element={<OrderAcepted />} />
                            </Route>
                        )
                }

                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
