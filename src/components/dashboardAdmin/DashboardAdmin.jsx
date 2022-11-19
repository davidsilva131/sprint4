import { Container } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAsync } from "../../redux/actions/userAction";
import { ColorButton } from "../styledComponents/MaterialComponents";
import './DashboardAdmin.scss'
import FoodAdmin from "./FoodAdmin";
import FunctionsCards from "./FunctionsCards";
import OrdersAdmin from "./OrdersAdmin";
import RestaurantsAdmin from "./RestaurantsAdmin";
const DashboardAdmin = ({ setIsLoggedIn }) => {
    const userStorage = useSelector((store) => store.user);
    const dispatch = useDispatch()
    const [functionSelected, setFunctionSelected] = useState('Restaurants')
    const onCloseSession = () => {
        dispatch(userLogoutAsync());
        setIsLoggedIn(false)
    };
    return (
        <>
            <Container>
                <section className="admin">
                    <header className="admin__header">
                        <span>Admin: {userStorage.name}</span>
                        <ColorButton onClick={onCloseSession}>
                            Logout
                        </ColorButton>
                    </header>
                    <main className="admin__main">
                        <FunctionsCards setFunctionSelected={setFunctionSelected} />
                        <aside className="admin__main__container">
                            {
                                functionSelected === 'Restaurants' ?
                                    (
                                        <RestaurantsAdmin />
                                    ) : functionSelected === 'Food' ?
                                        (
                                            <FoodAdmin />
                                        ) :
                                        (
                                            <OrdersAdmin />
                                        )
                            }
                        </aside>
                    </main>
                </section>
            </Container>

        </>

    )
};

export default DashboardAdmin;
