import { Container } from "@mui/system";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from "react";
import './AllOrders.scss'
import logo from '../../images/ParedesLogo.png'
import { CardActionArea } from "@mui/material";

const AllOrders = () => {
    return (
        <Container>
            <div className="allOrders">
                <section className="allOrders__tittle">
                    <h1>All Orders</h1>
                </section>
                <section className="allOrders__orders">
                    <CardActionArea>
                        <aside className="allOrders__orders__card">
                            <div className="allOrders__orders__card__left">
                                <img src={logo} alt="restaurant logo" />
                                <div className="allOrders__orders__card__left__restaurant">
                                    <span className="allOrders__orders__card__left__name">Pardes restaurant</span>
                                    <span className="allOrders__orders__card__left__price">$ 132.00</span>
                                </div>
                            </div>
                            <div className="allOrders__orders__card__right">
                                <span className="allOrders__orders__card__right__state delivered">Delivered <ArrowForwardIosIcon sx={{ width: '10px' }} /></span>
                            </div>
                        </aside>
                    </CardActionArea>
                    <CardActionArea>
                        <aside className="allOrders__orders__card">
                            <div className="allOrders__orders__card__left">
                                <img src={logo} alt="restaurant logo" />
                                <div className="allOrders__orders__card__left__restaurant">
                                    <span className="allOrders__orders__card__left__name">Pardes restaurant</span>
                                    <span className="allOrders__orders__card__left__price">$ 132.00</span>
                                </div>
                            </div>
                            <div className="allOrders__orders__card__right">
                                <span className="allOrders__orders__card__right__state canceled">Canceled <ArrowForwardIosIcon sx={{ width: '10px' }} /></span>
                            </div>
                        </aside>
                    </CardActionArea>

                </section>
            </div>
        </Container>
    )
};

export default AllOrders;
