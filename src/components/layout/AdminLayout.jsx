import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAsync } from "../../redux/actions/userAction";
import { ColorButton } from "../styledComponents/MaterialComponents";
import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import FunctionsCards from "../dashboardAdmin/FunctionsCards";
import './AdminLayout.scss'
const AdminLayout = ({ setIsLoggedIn }) => {
    const userStorage = useSelector((store) => store.user);
    const dispatch = useDispatch()
    const onCloseSession = () => {
        dispatch(userLogoutAsync());
        setIsLoggedIn(false)
    };
    return (
        <>
            <Container>
                <section className="admLayout">
                    <header className="admLayout__header">
                        <span>Admin: {userStorage.name}</span>
                        <ColorButton onClick={onCloseSession}>
                            Logout
                        </ColorButton>
                    </header>
                    <FunctionsCards />
                </section>

            </Container>
            <Outlet />
        </>
    )
};

export default AdminLayout;
