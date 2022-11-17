import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import GoBack from "../styledComponents/GoBack";
import './Restaurant.scss'
import { Card, CardActionArea, CardContent, CardMedia, Rating } from "@mui/material";
import KindOfFoodCards from "./KindOfFoodCards";
import FoodCards from "./FoodCards";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Restaurant = () => {
    const [restaurantInfo, setRestaurantInfo] = useState()
    const [menuFiltered, setMenuFiltered] = useState([])
    const restaurantsStorage = useSelector((store) => store.restaurants);
    const { name } = useParams();
    const restaurant = [];

    useEffect(() => {
        getRestaurantInfo()
    }, []);

    const getRestaurantInfo = () => {
        restaurantsStorage.restaurants.forEach(element => {
            if (element.name === name) {
                restaurant.push(element)
            }
        });
        setRestaurantInfo(restaurant[0])
    }

    return (
        <>
            {
                restaurantInfo ? (
                    <Container>
                        <section className="restaurant">
                            <aside className="restaurant__head">
                                <GoBack />
                                <img src={restaurantInfo.image} alt="restaurant logo" />
                            </aside>
                            <aside className="restaurant__card">
                                <img src={restaurantInfo.image} alt="" />
                                <div className="restaurant__card__info">
                                    <span className="restaurant__card__name">{restaurantInfo.name}</span>
                                    <span className="restaurant__card__description">{restaurantInfo.description}</span>
                                    <div>
                                        <span className="restaurant__card__time">{restaurantInfo.workTime}</span>
                                    </div>
                                </div>
                            </aside>
                            <aside className="restaurant__filter">
                                <KindOfFoodCards menu={restaurantInfo.menu} setMenuFiltered={setMenuFiltered} />
                            </aside>
                            <section className="restaurant__food">
                                {
                                    menuFiltered.length ?
                                        (
                                            <FoodCards menu={menuFiltered} />

                                        ) :
                                        (
                                            <FoodCards menu={restaurantInfo.menu} />
                                        )
                                }
                            </section>
                        </section>
                    </Container>
                ) : (<></>)

            }
        </>

    )
};

export default Restaurant;
