import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import './Home.scss'
import { PersonalLocation } from "../styledComponents/MaterialComponents";
import { Carousel } from "../styledComponents/Carousel";
import RestaurantCard from "./RestaurantCard";
import FiltersCards from "./FiltersCards";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantsAsync } from "../../redux/actions/restaurantsAction";

export const Home = () => {
    const { restaurants } = useSelector((store) => store.restaurants)
    const [restaurantsFiltered, setRestaurantsFiltered] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        setRestaurantsFiltered(restaurants)
    }, []);


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
                    <FiltersCards restaurants={restaurants} setRestaurantsFiltered={setRestaurantsFiltered} restaurantsFiltered={restaurantsFiltered} restaurantsCategory={restaurantsCategory} />
                </section>
                <section className="home__restaurants">
                    {
                        restaurantsFiltered.length ? (
                            <RestaurantCard restaurants={restaurantsFiltered} />
                        ) : (<RestaurantCard restaurants={restaurants} />)
                    }
                </section>
            </Container>
        </div>
    )
};
