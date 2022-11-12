import { Box, Container } from "@mui/system";
import React from "react";
import './Home.scss'
import { PersonalLocation } from "../styledComponents/MaterialComponents";
import { Carousel } from "../styledComponents/Carousel";
import RestaurantCard from "./RestaurantCard";
import FiltersCards from "./FiltersCards";

export const Home = () => {
    return (
        <div className="home">
            <Container>
                <aside className="home__location" onClick={() => { alert('da click') }}>
                    <PersonalLocation />
                    <div>
                        <p>DELIVERI TO</p>
                        <h4>882 Well St, New York</h4>
                    </div>
                </aside>
                <div className="home__carousel">
                    <Carousel />
                </div>
                <section className="home__filters">
                    <FiltersCards />
                </section>
                <section className="home__restaurants">
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                </section>
            </Container>
        </div>
    )
};
