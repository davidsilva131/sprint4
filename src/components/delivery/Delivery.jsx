import { Checkbox, FormControlLabel, InputAdornment } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import GoBack from "../styledComponents/GoBack";
import { ColorButton, CssTextField, PersonalLocation } from "../styledComponents/MaterialComponents";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './Delivery.scss'
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { newOrderAsync } from "../../redux/actions/allOrdersAction";
import { Navigate, useNavigate } from "react-router-dom";

const Delivery = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [payment, setPayment] = useState('')
    const [showCard, setShowCard] = useState(false)
    const food = useSelector((store) => store.actualOrder)
    const user = useSelector((store) => store.user)
    const { restaurants } = useSelector((store) => store.restaurants)
    const deliveryPrice = 5000;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = ({ target }) => {
        setPayment(target.value)
    }

    const handleVisibility = () => {
        setShowCard(!showCard)
    }

    const onSubmit = (data) => {
        const restaurantId = getRestaurant(food.name)
        const newOrder = {
            product: food.name,
            subTotal: food.price,
            total: food.price + deliveryPrice,
            payment: payment,
            note: data.note,
            address: data.address,
            aditionalIngredients: food.aditionalIngredients,
            user: user.uid,
            restaurant: restaurantId
        }
        dispatch(newOrderAsync(newOrder))
        navigate('/orderacepted')
    }

    const getRestaurant = (name) => {
        let restaurantId
        restaurants.forEach(restaurant => {
            restaurant.menu.forEach(food => {
                if (food.name === name) {
                    restaurantId = restaurant.id;
                }
            })

        });
        return restaurantId
    }

    return (
        <Container>
            <section className="delivery">
                <aside className="delivery__head">
                    <GoBack />
                    <span>New Order</span>
                </aside>
                <form onSubmit={handleSubmit(onSubmit)} className="delivery__form">
                    <div className="delivery__address">
                        <span>Deliver to</span>
                        <CssTextField
                            variant="standard"
                            placeholder="Address"
                            {...register('address', { required: "Address is required" })}
                            error={!!errors?.address}
                            helperText={errors?.address ? errors.address.message : null}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonalLocation />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="delivery__payment">
                        <span>Payment</span>
                        <FormControlLabel control={
                            <Checkbox value='Cash'
                                onChange={handleChange}
                                checked={payment === 'Cash' ? true : false}
                            />
                        } label="Cash" />
                        <FormControlLabel control={
                            <Checkbox value='Card'
                                onChange={handleChange}
                                checked={payment === 'Card' ? true : false}
                            />
                        } label="Card" />
                        {
                            payment === 'Card'
                            && (
                                <CssTextField
                                    type={showCard ? 'number' : 'password'}
                                    variant="standard"
                                    placeholder="Card"
                                    {...register("card", { required: "Card is required" })}
                                    error={!!errors?.card}
                                    helperText={errors?.card ? errors.card.message : null}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <CreditCardIcon />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {!showCard
                                                    ? <VisibilityIcon sx={{ cursor: 'pointer' }} onClick={handleVisibility} />
                                                    : <VisibilityOffIcon sx={{ cursor: 'pointer' }} onClick={handleVisibility} />
                                                }
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            )
                        }
                    </div>
                    <div className="delivery__food">
                        <div className="delivery__food__card">
                            <img src={food.image} alt={food.name} />
                            <span>{food.quantity}</span>
                            <span>{food.name}</span>
                            <span>$ {food.price}</span>
                        </div>
                    </div>
                    <div className="delivery__note">
                        <span>Note</span>
                        <CssTextField
                            type='text'
                            placeholder="Write something"
                            {...register("note")}
                        />
                    </div>
                    <div className="delivery__price">
                        <div className="delivery__price__subtotal">
                            <aside>
                                <span>Products</span>
                                <span>$ {food.price}</span>
                            </aside>
                            <aside>
                                <span>Delivery</span>
                                <span>$ {deliveryPrice}</span>
                            </aside>
                        </div>
                        <div className="delivery__price__total">
                            <aside>
                                <span>Total</span>
                                <span className="delivery__price__total__price">$ {food.price + deliveryPrice}</span>
                            </aside>
                        </div>
                    </div>
                    <ColorButton type="submit">Order</ColorButton>

                </form>

            </section>
        </Container>
    )
};

export default Delivery;
