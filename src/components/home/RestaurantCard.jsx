import { CardActionArea, Rating } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import './RestaurantCard.scss'
const RestaurantCard = ({ restaurants }) => {

    const navigate = useNavigate()

    const handleClickRestaurant = ({ name }) => {
        navigate(`/restaurant/${name}`)
    }
    return (
        <>
            {
                restaurants.map((restaurant, index) =>
                    <CardActionArea key={index} onClick={() => { handleClickRestaurant(restaurant) }} sx={{ width: '320px', height: '106px' }}>
                        <aside className="card">
                            <div className="card__image">
                                <img src={restaurant.image} alt="Restaurant" loading="lazy" />
                            </div>
                            <div className="card__info">
                                <span className="card__info__name">{restaurant.name}</span>
                                <Rating name="read-only" value={restaurant.stars} readOnly />
                                <span className="card__info__time">Work Time {restaurant.workTime}</span>
                                <div>
                                    <span className="card__info__before">Before you</span>
                                    <span className="card__info__price">${restaurant.beforeYou}</span>
                                </div>
                            </div>
                        </aside>
                    </CardActionArea>
                )
            }
        </>
    )
};

export default RestaurantCard;
