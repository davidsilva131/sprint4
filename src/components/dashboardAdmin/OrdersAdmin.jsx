import { Button, Card, CardActions, CardContent, CardMedia, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteOrderAsync, getAdminOrders, getOrdersAsync } from "../../redux/actions/allOrdersAction";
import './OrdersAdmin.scss'
const OrdersAdmin = () => {
    const orders = useSelector(store => store.allOrders)
    const { restaurants } = useSelector(store => store.restaurants)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const handleOrder = (action, id) => {
        switch (action) {
            case 'Edit':
                navigate(`/editorder/${id}`)
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
                        dispatch(deleteOrderAsync(id))
                        dispatch(getOrdersAsync())
                        Swal.fire(
                            'Deleted!',
                            'Your order has been deleted.',
                            'success'
                        )
                    }
                })
                break;

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
                                            <span>Quantity: {order.quantity}</span>
                                            <span>Price: $ {order.total}</span>
                                        </div>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => { handleOrder('Edit', order.id) }} size="small">Edit</Button>
                                        <Button onClick={() => { handleOrder('Delete', order.id) }} size="small">Delete</Button>
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
