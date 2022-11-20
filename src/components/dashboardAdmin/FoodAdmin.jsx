import { Button, Card, CardActions, CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ColorButton } from "../styledComponents/MaterialComponents";
import './DashboardAdmin.scss'
const FoodAdmin = () => {
    const { restaurants } = useSelector((store) => store.restaurants)
    const [foodState, setFoodState] = useState([])

    useEffect(() => {
        let FOOD = []
        let allFood = restaurants.map(restaurant => restaurant.menu)
        allFood.forEach(element => {
            element.map(food => FOOD.push(food))
        });
        setFoodState(FOOD)
    }, []);

    const handleOpen = (text, food) => {
        console.log(`${text} ${food.name}`);
    }

    return (
        <Container>
            <section className="admFood">
                <section className="admin">
                    <main className="admin__main">
                        <aside className="admin__main__container">
                            <div className="admin__food">
                                <ColorButton>Add Food</ColorButton>
                                {
                                    foodState.map((food, index) =>
                                        <Card key={index} sx={{ width: 345, height: 200 }}>
                                            <CardMedia
                                                component="img"
                                                alt={food.name}
                                                height="140"
                                                image={food.image}
                                            />
                                            <CardActions>
                                                <Button onClick={() => { handleOpen('Edit', food) }} size="small">Edit</Button>
                                                <Button onClick={() => { handleOpen('Delete', food) }} size="small">Delete</Button>
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
