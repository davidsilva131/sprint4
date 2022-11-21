import { Button, Card, CardActions, CardContent, CardMedia, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminOrders } from "../../redux/actions/allOrdersAction";
import './OrdersAdmin.scss'
const OrdersAdmin = () => {
    const orders = useSelector(store => store.allOrders)
    const { restaurants } = useSelector(store => store.restaurants)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAdminOrders())
    }, []);

    const getRestaurant = (restaurantId, info) => {
        switch (info) {
            case 'name':
                const { name } = restaurants.find(restaurant => restaurant.id === restaurantId)
                return name
            case 'image':
                const { image } = restaurants.find(restaurant => restaurant.id === restaurantId)
                return image
            default:
                break;
        }

    }
    return (
        <Container>
            <main className="admorders">
                {
                    orders
                        ? (
                            orders.map((order, index) =>
                                <Card key={index} sx={{ maxWidth: 345, height: 350 }}>
                                    <CardMedia
                                        component="img"
                                        alt={getRestaurant(order.restaurant, 'name')}
                                        height="140"
                                        image={getRestaurant(order.restaurant, 'image')}
                                    />
                                    <CardContent>
                                        <div className="admorders__card">
                                            <span>Restaurant: {getRestaurant(order.restaurant, 'name')}</span>
                                            <span>Order: {order.id}</span>
                                            <span>Product: {order.product}</span>
                                            <span>Price: $ {order.total}</span>
                                        </div>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Edit</Button>
                                        <Button size="small">Delete</Button>
                                    </CardActions>
                                </Card>
                            )
                        )
                        : (<div>Loading</div>)
                }
            </main>
        </Container>
    )
};

export default OrdersAdmin;
