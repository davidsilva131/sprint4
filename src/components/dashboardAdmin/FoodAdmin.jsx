import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { ColorButton } from "../styledComponents/MaterialComponents";
import './DashboardAdmin.scss'
const FoodAdmin = () => {
    const { restaurants } = useSelector((store) => store.restaurants)
    const [foodState, setFoodState] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        let FOOD = []
        let allFood = restaurants.map(restaurant => restaurant.menu)
        allFood.forEach(element => {
            element.map(food => FOOD.push(food))
        });
        setFoodState(FOOD)
    }, []);

    const handleOpen = (text, food) => {
        switch (text) {
            case 'Edit':
                navigate(`/editfood/${food}`)
                break;

            default:
                break;
        }
    }

    const handleAddFood = () => {
        navigate('/addfood')
    }

    return (
        <Container>
            <section className="admFood">
                <section className="admin">
                    <main className="admin__main">
                        <aside className="admin__main__container">
                            <div className="admin__food">
                                <ColorButton sx={{ height: '100px' }} onClick={handleAddFood}>Add Food</ColorButton>
                                {
                                    foodState.map((food, index) =>
                                        <Card key={index} sx={{ width: 345 }}>
                                            <CardMedia
                                                component="img"
                                                alt={food.name}
                                                height="140"
                                                image={food.image}
                                            />
                                            <CardContent>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                                    <span>{food.name}</span>
                                                    <span>{food.description}</span>
                                                    <span>$ {food.price}</span>
                                                </div>
                                            </CardContent>
                                            <CardActions>
                                                <Button onClick={() => { handleOpen('Edit', food.name) }} size="small">Edit</Button>
                                                <Button onClick={() => { handleOpen('Delete', food.name) }} size="small">Delete</Button>
                                            </CardActions>
                                        </Card>
                                    )
                                }
                            </div>
                        </aside>
                    </main>
                </section>
            </section>
        </Container>
    )
};

export default FoodAdmin;
