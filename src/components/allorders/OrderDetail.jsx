import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrdersAsync } from "../../redux/actions/allOrdersAction";
import GoBack from "../styledComponents/GoBack";
import './OrderDetail.scss'

const OrderDetail = () => {
    const { id } = useParams();
    const { uid } = useSelector(store => store.user)
    const dispatch = useDispatch()
    const orders = useSelector(store => store.allOrders);
    const [orderSelected, setOrderSelected] = useState();

    useEffect(() => {
        dispatch(getOrdersAsync(uid))
        getOrder(id)
    }, []);

    const getOrder = (id) => {
        setOrderSelected(orders.find(order => order.id === id));
    }

    return (
        <Container>
            <section className="orderdetail">
                <header className="orderdetail__header">
                    <GoBack />
                    <span>Order</span>
                </header>
                {
                    orderSelected
                        ? (
                            <main className="orderdetail__body">
                                <aside className="orderdetail__body__products">
                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        <span>X{orderSelected.quantity}</span>
                                        <span>{orderSelected.product}</span>
                                    </div>
                                    <span>$ {orderSelected.subTotal}</span>
                                </aside>
                                <aside className="orderdetail__body__cost">
                                    <div>
                                        <span>Production cost</span>
                                        <span>$ {orderSelected.subTotal}</span>
                                    </div>
                                    <div>
                                        <span>Cost of delivery</span>
                                        <span>${orderSelected.total - orderSelected.subTotal}</span>
                                    </div>
                                </aside>
                                <aside className="orderdetail__body__total">
                                    <span>Total</span>
                                    <span>$ {orderSelected.total}</span>
                                </aside>
                            </main>
                        )
                        : (<div>Loading</div>)
                }

            </section>
        </Container>
    )
};

export default OrderDetail;
