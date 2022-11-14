import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import './NavBar.scss'
import { StyledHomeIcon, StyledSearchIcon, StyledHistoryIcon, StyledAccountIcon } from "../styledComponents/MaterialComponents";
const NavBar = () => {

    const navigate = useNavigate()

    const handleClickNav = (route) => {
        navigate(route)
    }

    return (
        <>
            <Outlet />
            <div className="navbar">
                <StyledHomeIcon onClick={() => { handleClickNav('home') }} />
                <StyledSearchIcon onClick={() => { handleClickNav('search') }} />
                <StyledHistoryIcon onClick={() => { handleClickNav('allorders') }} />
                <StyledAccountIcon onClick={() => { handleClickNav('profile') }} />
            </div>
        </>
    )
};

export default NavBar;
