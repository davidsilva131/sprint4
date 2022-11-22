import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { updateOrderAsync } from "../../redux/actions/allOrdersAction";
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";
import './EditRestaurant.scss'
const EditOrder = () => {
    const { id } = useParams()
    const orders = useSelector((state) => state.allOrders)
    const [specificOrder, setSpecificOrder] = useState()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        getOrder(id)
    }, []);

    const getOrder = (id) => {
        setSpecificOrder(orders.find(order => order.id === id))
    }

    const onSubmit = (data) => {
        const quantity = parseInt(data.quantity)
        const subTotal = parseInt(data.subTotal)
        const total = parseInt(data.total)
        const updatedOrder = {
            quantity: quantity,
            subTotal: subTotal,
            total: total,
            address: data.address
        }
        dispatch(updateOrderAsync(updatedOrder, id))
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Order has been edited',
            showConfirmButton: false,
            timer: 1500
        })
        navigate('/home')
    }

    return (
        <Container>
            <main className="editrestaurant">
                {
                    specificOrder
                    && (
                        <>
                            <span>Editing {specificOrder.product} order</span>
                            <form onSubmit={handleSubmit(onSubmit)} className="editrestaurant__form">
                                <CssTextField
                                    defaultValue={specificOrder.address}
                                    type='text'
                                    label="Address"
                                    variant="standard"
                                    {...register("address", { required: "Order address is required" })}
                                    error={!!errors?.address}
                                    helperText={errors?.address ? errors.address.message : null}
                                />
                                <CssTextField
                                    defaultValue={specificOrder.quantity}
                                    type='number'
                                    label="Quantity"
                                    variant="standard"
                                    {...register("quantity", { required: "Order quantity is required" })}
                                    error={!!errors?.quantity}
                                    helperText={errors?.quantity ? errors.quantity.message : null}
                                />
                                <CssTextField
                                    defaultValue={specificOrder.subTotal}
                                    type='number'
                                    label="SubTotal"
                                    variant="standard"
                                    {...register("subTotal", { required: "Order subtotal is required" })}
                                    error={!!errors?.subTotal}
                                    helperText={errors?.subTotal ? errors.subTotal.message : null}
                                />
                                <CssTextField
                                    defaultValue={specificOrder.total}
                                    type='number'
                                    label="Total"
                                    variant="standard"
                                    {...register("total", { required: "Order total is required" })}
                                    error={!!errors?.total}
                                    helperText={errors?.total ? errors.total.message : null}
                                />
                                <ColorButton type="submit">Edit Order</ColorButton>

                            </form>
                        </>
                    )

                }
            </main>
        </Container>
    )
}

export default EditOrder;