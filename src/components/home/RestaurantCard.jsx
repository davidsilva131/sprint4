import { CardActionArea, Rating } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import './RestaurantCard.scss'
const RestaurantCard = () => {
    const [ratingValue, setRatingValue] = React.useState(2);
    const navigate = useNavigate()
    const handleClickRestaurant = () => {
        console.log('da click al restaurante');
        navigate('/restaurant')
    }
    return (
        <CardActionArea onClick={handleClickRestaurant} sx={{ width: '320px', height: '106px' }}>
            <aside className="card">
                <div className="card__image">
                    <img src="https://imgs.search.brave.com/1raZAKQJIjWGPvOQ68mkDEooABe92ydA-CRNKZEURtg/rs:fit:480:480:1/g:ce/aHR0cHM6Ly93d3cu/dGVsZWdyYXBoLmNv/LnVrL2NvbnRlbnQv/ZGFtL2x1eHVyeS8y/MDE2LzA3LzE1L3Jv/b2Z0b3BfNV90cmFu/c19OdkJRelFOanY0/QnFtUU42Vk9iVUk1/cFJqNTF6dU1hTzV5/b0ZxMXpBdUZuZUVt/NmRZTVdqUkJrLmpw/Zz9pbXdpZHRoPTQ1/MA" alt="Restaurant" loading="lazy" />
                </div>
                <div className="card__info">
                    <span className="card__info__name">Pardes Restaurant</span>
                    <Rating name="read-only" value={ratingValue} readOnly />
                    <span className="card__info__time">Work Time 09:00 - 21:00</span>
                    <div>
                        <span className="card__info__before">Before you</span>
                        <span className="card__info__price">13$</span>
                    </div>
                </div>
            </aside>
        </CardActionArea>
    )
};

export default RestaurantCard;
