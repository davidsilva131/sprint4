import { Button, Card, CardActions, CardMedia, Input, Modal, TextareaAutosize } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";
import ModalEdit from "./ModalEdit";
import './RestaurantsAdmin.scss'
const RestaurantsAdmin = () => {
    const { restaurants } = useSelector((store) => store.restaurants)
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, control, formState: { errors } } = useForm()
    const [restaurantSelected, setRestaurantSelected] = useState()

    useEffect(() => {
        console.log(restaurantSelected);
    }, [restaurantSelected]);

    const handleOpen = (action, restaurant) => {
        setRestaurantSelected()
        setOpen(true)
        setRestaurantSelected(restaurant)
    };

    const handleClose = () => {
        setOpen(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        gap: '5px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        bgcolor: 'gray',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <aside className="restaurantsAdm">
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
