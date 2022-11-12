import { Container } from "@mui/system";
import React, { useState } from "react";
import GoBack from "../styledComponents/GoBack";
import './Restaurant.scss'
import ParedesLogo from '../../images/ParedesLogo.png'
import { Card, CardActionArea, CardContent, CardMedia, Rating } from "@mui/material";
import KindOfFoodCards from "./KindOfFoodCards";
import FoodCards from "./FoodCards";
const Restaurant = () => {
    const [ratingValue, setRatingValue] = useState(1)

    return (
        <Container>
            <section className="restaurant">
                <aside className="restaurant__head">
                    <GoBack />
                    <img src={ParedesLogo} alt="restaurant logo" />
                </aside>
                <aside className="restaurant__card">
                    <img src="https://imgs.search.brave.com/1raZAKQJIjWGPvOQ68mkDEooABe92ydA-CRNKZEURtg/rs:fit:480:480:1/g:ce/aHR0cHM6Ly93d3cu/dGVsZWdyYXBoLmNv/LnVrL2NvbnRlbnQv/ZGFtL2x1eHVyeS8y/MDE2LzA3LzE1L3Jv/b2Z0b3BfNV90cmFu/c19OdkJRelFOanY0/QnFtUU42Vk9iVUk1/cFJqNTF6dU1hTzV5/b0ZxMXpBdUZuZUVt/NmRZTVdqUkJrLmpw/Zz9pbXdpZHRoPTQ1/MA" alt="" />
                    <div className="restaurant__card__info">
                        <span className="restaurant__card__name">Pardes Restaurant</span>
                        <span className="restaurant__card__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                        <div>
                            <Rating name="read-only" value={ratingValue} readOnly />
                            <span className="restaurant__card__time">15-20 min</span>
                        </div>
                    </div>
                </aside>
                <aside className="restaurant__filter">
                    <KindOfFoodCards />
                </aside>
                <section className="restaurant__food">
                    <FoodCards />
                </section>
            </section>
        </Container>
    )
};

export default Restaurant;
