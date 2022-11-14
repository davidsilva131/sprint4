import { Container, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import GoBack from "../styledComponents/GoBack";
import { ColorButton, CssTextField } from "../styledComponents/MaterialComponents";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './Payment.scss'
import { useNavigate } from "react-router-dom";
const Payment = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const handleVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleAddCard = () => {
        navigate('/addcard')
    }

    return (
        <Container>
            <div className="payment">
                <section className="payment__tittle">
                    <GoBack />
                    <span>Payment method</span>
                </section>
                <section className="payment__body">
                    <aside className="payment__body__cards">
                        <CssTextField
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            value="15486321475"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CreditCardIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {showPassword
                                            ? <VisibilityOffIcon onClick={handleVisibility} /> :
                                            <VisibilityIcon onClick={handleVisibility} />}
                                    </InputAdornment>
                                )
                            }}
                        />
                        <CssTextField
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            value="15486321475"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CreditCardIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {showPassword
                                            ? <VisibilityOffIcon onClick={handleVisibility} /> :
                                            <VisibilityIcon onClick={handleVisibility} />}
                                    </InputAdornment>
                                )
                            }}
                        />
                    </aside>
                    <ColorButton onClick={handleAddCard}>
                        Add new card
                    </ColorButton>
                </section>
            </div>
        </Container>
    )
}
export default Payment;
