import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const FoodCards = ({ menu }) => {

    const navigate = useNavigate()
    const handleFoodCard = (name) => {
        navigate(`/fooddetails/${name}`)
    }

    return (
        <>
            {
                menu.map((food, index) =>
                    <Card key={index} sx={{ width: '171px' }}>
                        <CardActionArea onClick={() => { handleFoodCard(food.name) }}>
                            <CardMedia
                                component="img"
                                height="110px"
                                image={food.image}
                                alt="plato"
                            />
                            <CardContent>
                                <div className="food">
                                    <span className="food__name">{food.name}</span>
                                    <span className="food__price">$  {food.price}</span>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )
            }

        </>
    )
};

export default FoodCards;
