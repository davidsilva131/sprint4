import { Chip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import './FunctionsCards.scss'
const FunctionsCards = () => {
    const functions = ['Restaurants', 'Food', 'Orders']
    const navigate = useNavigate()

    const handleClickFunction = (text) => {
        switch (text) {
            case 'Restaurants':
                navigate('home')
                break;
            case 'Food':
                navigate('adminfood')
                break;
            case 'Orders':
                navigate('adminorders')
                break;
            default:
                break;
        }
    }
    return (
        <>
            <section className="functions">
                {
                    functions.map((fun, index) =>
                        <Chip key={index} label={fun} onClick={() => { handleClickFunction(fun) }} />
                    )
                }
            </section>
        </>
    )
};

export default FunctionsCards;
