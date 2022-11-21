import { Container } from "@mui/system";
import React from "react";
import GoBack from "../styledComponents/GoBack";
import { ColorButton } from "../styledComponents/MaterialComponents";
import logo from '../../images/orderAccepted.png'
import './OrderAcepted.scss'
import { useNavigate } from "react-router-dom";
const OrderAcepted = () => {
    const navigate = useNavigate()
    const handleFollowOrder = () => {
        navigate('/allorders')
    }
    return (
        <Container>
            <section className="orderacepted">
                <header className="orderacepted__header">
                    <GoBack />
                    <span>Order is accepted</span>
                </header>
                <main className="orderacepted__body">
                    <div>
                        <img src={logo} alt="accepted logo" />
                    </div>
                    <ColorButton onClick={handleFollowOrder}>Follow Order</ColorButton>
                </main>
            </section>
        </Container>
    )
};

export default OrderAcepted;
