import { Container } from "@mui/system";
import React from "react";
import './DashboardAdmin.scss'
import RestaurantsAdmin from "./RestaurantsAdmin";
const DashboardAdmin = () => {

    return (
        <>
            <Container>
                <section className="admin">
                    <main className="admin__main">
                        <aside className="admin__main__container">
                            <RestaurantsAdmin />
                        </aside>
                    </main>
                </section>
            </Container>

        </>

    )
};

export default DashboardAdmin;
