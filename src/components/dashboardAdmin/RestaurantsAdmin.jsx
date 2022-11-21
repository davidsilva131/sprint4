import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";
import Swal from 'sweetalert2'
import './RestaurantsAdmin.scss'
import { deleteRestaurantAsync, getRestaurantsAsync } from "../../redux/actions/restaurantsAction";
const RestaurantsAdmin = () => {
    const { restaurants } = useSelector((store) => store.restaurants)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleOpen = (action, id) => {
        switch (action) {
            case 'Edit':
                navigate(`/editrestaurant/${id}`)
                break;
            case 'Delete':
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(deleteRestaurantAsync(id))
                        dispatch(getRestaurantsAsync())
                        Swal.fire(
                            'Deleted!',
                            'Your restaurant has been deleted.',
                            'success'
                        )
                    }
                })
                break;
            default:
                break;
        }
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
                        <Card key={index} sx={{ maxWidth: 345, height: 300 }}>
                            <CardMedia
                                component="img"
                                alt={restaurant.name}
                                height="140"
                                image={restaurant.image}
                            />
                            <CardContent>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                    <span>{restaurant.name}</span>
                                    <span>{restaurant.category}</span>
                                    <span>Before you: ${restaurant.beforeYou}</span>
                                </div>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => { handleOpen('Edit', restaurant.id) }} size="small">Edit</Button>
                                <Button onClick={() => { handleOpen('Delete', restaurant.id) }} size="small">Delete</Button>
                            </CardActions>
                        </Card>
                    )
                }

            </aside>
        </>

    )
};

export default RestaurantsAdmin;
