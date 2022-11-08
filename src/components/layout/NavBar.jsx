import React from "react";
import { Outlet } from "react-router-dom";
import './NavBar.scss'
import { StyledHomeIcon, StyledSearchIcon, StyledHistoryIcon, StyledAccountIcon } from "../styledComponents/MaterialComponents";
import { IconButton } from "@mui/material";
const NavBar = () => {

    const buttons = [
        StyledHomeIcon,
        StyledSearchIcon,
        StyledHistoryIcon,
        StyledAccountIcon]

    return (
        <>
            <Outlet />
            <div className="navbar">
                <StyledHomeIcon />
                <StyledSearchIcon />
                <StyledHistoryIcon />
                <StyledAccountIcon />
            </div>
        </>
    )
};

export default NavBar;
