import { Button, Card, CardActions, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";
import './RestaurantsAdmin.scss'
const RestaurantsAdmin = () => {
    const { restaurants } = useSelector((store) => store.restaurants)
    const [restaurantSelected, setRestaurantSelected] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        console.log(restaurantSelected);
    }, [restaurantSelected]);

    const handleOpen = (action, restaurant) => {
        setRestaurantSelected()
        setRestaurantSelected(restaurant)
    };

    const handleAddRestaurant = () => {
        navigate('/addrestaurant')
    }
    return (
        <>
            <aside className="restaurantsAdm">
                <ColorButton onClick={handleAddRestaurant} sx={{ width: '100px', height: '100px' }}>Add Restaurant</ColorButton>
                {
                    restaurants.map((restaurant, index) =>
                        <Card key={index} sx={{ maxWidth: 345, height: 200 }}>
                            <CardMedia
                                component="img"
                                alt={restaurant.name}
                                height="140"
                                image={restaurant.image}
                            />
                            <CardActions>
                                <Button onClick={() => { handleOpen('Edit', restaurant) }} size="small">Edit</Button>
                                <Button onClick={() => { handleOpen('Delete', restaurant) }} size="small">Delete</Button>
                            </CardActions>
                        </Card>
                    )
                }
                {
                    restaurantSelected
                    && (
                        <CssTextField
                            defaultValue={restaurantSelected.name}
                            label="Name"

                        />
                    )
                }

            </aside>
        </>

    )
};

export default RestaurantsAdmin;
