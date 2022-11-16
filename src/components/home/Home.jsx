import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import './Home.scss'
import { PersonalLocation } from "../styledComponents/MaterialComponents";
import { Carousel } from "../styledComponents/Carousel";
import RestaurantCard from "./RestaurantCard";
import FiltersCards from "./FiltersCards";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantsAsync } from "../../redux/actions/restaurantsAction";

export const Home = () => {
    const { restaurants } = useSelector((store) => store.restaurants)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getRestaurantsAsync())
    // }, []);

    const restaurantsCategory = restaurants.map((element) => element.category)
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
                    <FiltersCards restaurantsCategory={restaurantsCategory} />
                </section>
                <section className="home__restaurants">
                    <RestaurantCard restaurants={restaurants} />
                </section>
            </Container>
        </div>
    )
};
